import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  activeCount : number = 0;
  inActiveCount : number = 0;

  constructor() { }

  addCount(status : string) {
    if(status === "active") {
      this.inActiveCount += 1;
      console.log("Active to Inactive: " , this.inActiveCount);
    }
    else {
      this.activeCount += 1;
      console.log("Inactive to Active: " , this.activeCount);
    }
  }
}
