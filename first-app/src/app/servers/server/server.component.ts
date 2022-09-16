import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server, ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // showStatus : boolean = false;
  // @Input() serverData : {name : string, status : string} = {name : '', status : ''};
  // @Input() color : string = "";
  // @Input() desc : string = "";
  // @Input('abc') hello : string = "";
  // @Output() statusChanged = new EventEmitter<string>();
  // @Output() greet = new EventEmitter<string>();
  // @Input() count = 0;
  // @Output() countChange = new EventEmitter<number>();
  // toggleStatus() {
  //   this.serverData.status = this.serverData.status === "online" ? "offline" : "online";
  //   this.statusChanged.emit(this.serverData.name + " changed to " + this.serverData.status);
  // }
  // sendHello() {
  //   this.greet.emit("This is Hello");
  // }
  // increaseCount() {
  //   this.count ++;
  //   this.countChange.emit(this.count);
  // }

  server: Server = {
    id: -1,
    name: '',
    status: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serverService: ServerService
  ) {}

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      preserveFragment: true,
    });
  }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serverService.getServer(+params['id']);
    // });

    this.route.data.subscribe((data) => {
      this.server = data['server'];
    });
  }
}
