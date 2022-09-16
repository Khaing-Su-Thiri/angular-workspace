import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers : Array<string> = [];

  constructor(private userService : UserService) { }

  changeStatus(status : string, user : string) {
    this.activeUsers = this.userService.changeStatus(status, user);
  }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
  }

}
