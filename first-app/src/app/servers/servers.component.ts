import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  serverCreationStatus = "no server was created.";
  serverName : string = "";
  username : string = "";

  backgroundColor = "pink";

  servers : Array<{name : string, status : string}> = [
    {name : 'Server1', status : 'offline'},
    {name : 'Server2', status : 'online'},
  ];

  hello : string = "Hello";

  logs : Array<string> =  [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onAddServer() {
    this.serverCreationStatus = this.serverName + " was created.";
  }

  onStatusChange(log : string) {
    this.logs.push(log);
  }

  reset() {
    this.username = "";
  }

  ngOnInit(): void {
  }

}
