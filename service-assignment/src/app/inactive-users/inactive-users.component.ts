import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {

  inActiveUsers : Array<string> = [];

  constructor(private userService : UserService) { }

  changeStatus(status : string, user : string) {
    this.inActiveUsers = this.userService.changeStatus(status, user);
  }

  ngOnInit(): void {
    this.inActiveUsers = this.userService.inActiveUsers;
  }

}
