import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, from, Subject, Subscription } from 'rxjs';
import { LoggingService } from './logging.service';
import { ShopService } from './shop.service';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService],
})
export class AppComponent implements OnInit {
  title = 'first-app';
  isOnline = true;
  servers = ['Server1', 'Server2', 'Server3'];

  serverList = [
    { name: 'Server1', status: 'online' },
    { name: 'Server2', status: 'offline' },
  ];

  isShow = true;

  logs: Array<string> = [];

  username = '';
  greet = '';

  isEven: boolean = false;
  number: number = 0;

  results: Array<number> = [];

  message: string = '';

  value = 10;

  statuses = ['online', 'offline', 'offline', 'online', 'offline', 'online'];

  isActivated = false;
  sub = new Subscription();

  subject = new Subject<number>();
  sub2 = new Subscription();

  behaviorSubject = new BehaviorSubject<number>(0);
  sub3 = new Subscription();

  @ViewChild('usernameInput') usernameInput: ElementRef = new ElementRef(
    HTMLInputElement
  );

  constructor(
    private loggingService: LoggingService,
    private userService: UserService,
    private shopService: ShopService
  ) {}

  show() {
    this.isShow = !this.isShow;
    this.logs.push('Button is clicked.');
  }

  onClickEvent(log: string) {
    this.logs.push(log);
  }

  addUser() {
    this.greet = 'Welcome ' + this.usernameInput.nativeElement.value;
  }

  onNumberChanged(number: number) {
    this.message = '';
    this.number = number;
    this.isEven = number % 2 == 0;
    this.results.push(this.number);
  }

  onNumberStopped(message: string) {
    this.message = message;
  }

  testSubject() {
    this.subject.next(1);

    this.sub2 = this.subject.subscribe((num) => {
      console.log('num is: ' + num);
    });

    this.subject.next(2);
  }

  testBehaviourSubject() {
    this.behaviorSubject.next(1);

    this.sub3 = this.behaviorSubject.subscribe((num) => {
      console.log('num is: ' + num);
    });

    this.behaviorSubject.next(2);
  }

  getProducts() {
    this.shopService.getProducts().subscribe((data) => {
      console.log(data);
    });
  }

  addProduct() {
    const data = { title: 'Fake Product' };
    this.shopService
      .addProduct(data)
      .subscribe((response) => console.log(response));
  }

  deleteProduct() {
    this.shopService
      .deleteProduct(1)
      .subscribe((response) => console.log(response));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

  ngOnInit() {
    this.getProducts();
    this.addProduct();
    this.deleteProduct();

    this.loggingService.printLog('Hello World');

    //this.testSubject();

    this.testBehaviourSubject();
    this.sub = this.userService.activateObservable.subscribe((didActivate) => {
      this.isActivated = didActivate;
    });

    let asyncTask = new Promise((resolve, reject) => resolve('Hi'));
    from(asyncTask).subscribe((data) => console.log(data));
  }
}
