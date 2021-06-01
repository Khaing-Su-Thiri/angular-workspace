import { NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { Row, rows } from './row';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rows : Row[] = [];

  equation : string = '';

  isCalculated : boolean = false;

  constructor() {
    this.rows = rows;
  }

  calculate(key: string) {
    switch(key) {
      case 'C' :
        this.equation = '';
        break;
      case '=' :
        if(this.equation.includes("^"))
          this.equation = this.equation.split("^").join("**");
        this.equation = eval(this.equation);
        this.isCalculated = true;
        break;
      case 'backspace' :
        this.equation = this.equation.slice(0, -1);
        break;
      default :
        if(this.isCalculated) {
          this.calculate("C");
          this.isCalculated = false;
        }
        this.equation += " " + key;
    }
  }
}

// squareRoot(0)
