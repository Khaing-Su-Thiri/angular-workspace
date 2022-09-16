import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../pos/cart/cart.component';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  @Input() result : Result = {items : [], totalPrice : 0, paid : 0, changed : 0};

  constructor() { }

  ngOnInit(): void {
  }

}
