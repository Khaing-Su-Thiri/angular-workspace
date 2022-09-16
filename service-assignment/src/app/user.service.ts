import { Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUsers = ["User 1", "User 2", "User 3"];
  inActiveUsers = ["User 4", "User 5", "User 6"];

  constructor(private countService : CountService) { }

  changeStatus(status : string, value : string) : Array<string> {
    this.countService.addCount(status);
    if(status === "active") {
      this.activeUsers = this.activeUsers.filter(data => data != value);
      this.inActiveUsers.push(value);
      return this.activeUsers;
    } else {
      this.inActiveUsers = this.inActiveUsers.filter(data => data != value);
      this.activeUsers.push(value);
      return this.inActiveUsers;
    }
  }
}
