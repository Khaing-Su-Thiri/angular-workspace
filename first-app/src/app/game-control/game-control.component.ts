import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  number : number = 0;
  @Output() numberChanged = new EventEmitter<number>();
  @Output() numberStopped = new EventEmitter<string>();
  intervalRef : any;

  changeNumber() {
    this.intervalRef = setInterval(() =>{
      this.number += 1;
      this.numberChanged.emit(this.number);
    }, 1000);
  }

  stopNumber() {
    clearInterval(this.intervalRef);
    this.numberStopped.emit("Stopped at Number " + this.number);
  }

  ngOnInit(): void {
  }

}
