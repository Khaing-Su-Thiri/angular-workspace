import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  isOnline = true;
  servers = ["Server1", "Server2", "Server3"];

  serverList = [{name : 'Server1', status : 'online'}, {name : 'Server2', status : 'offline'}];

  isShow = true;

  logs : Array<string> = [];

  show() {
    this.isShow = !this.isShow;
    this.logs.push("Button is clicked.");
  }
}
