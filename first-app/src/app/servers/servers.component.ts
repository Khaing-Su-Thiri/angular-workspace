import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server, ServerService } from './server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  // allowNewServer : boolean = false;
  // serverCreationStatus = "no server was created.";
  // serverName : string = "";
  // username : string = "";

  // backgroundColor = "pink";

  // servers : Array<{name : string, status : string}> = [
  //   {name : 'Server1', status : 'offline'},
  //   {name : 'Server2', status : 'online'},
  // ];

  // hello : string = "Hello";

  // logs : Array<string> =  [];

  // @Output() clickAlert = new EventEmitter<string>();

  // count = 100;

  // test = "";

  // @ContentChild("test", {static : true}) headingElement : ElementRef = new ElementRef(HTMLHeadingElement);

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 3000);
  // }

  // onAddServer() {
  //   this.serverCreationStatus = this.serverName + " was created.";
  // }

  // onStatusChange(log : string) {
  //   this.logs.push(log);
  // }

  // onGreet(log : string) {
  //   this.logs.push(log);
  // }

  // reset() {
  //   this.username = "";
  // }

  // ngOnInit(): void {
  //   this.test = this.headingElement.nativeElement.innerHTML;
  // }

  // click() {
  //   this.clickAlert.emit("Clicked!");
  // }

  servers: Server[] = [];

  constructor(
    private serverService: ServerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onReloadServer() {
    this.router.navigate(['/servers'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.servers = this.serverService.servers;
  }
}
