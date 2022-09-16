import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Item, items } from 'src/app/item';

export interface Result {
  items : Item[],
  totalPrice : number,
  paid : number,
  changed : number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  @Input() items : Item[] = [];

  totalPrice : number = 0;

  paid : number = 0;

  @Output() resultGot = new EventEmitter<Result>();

  constructor() { }

  calculateTotal() {
    this.totalPrice = 0;
    this.items.map((data) => {
      this.totalPrice += data.price * data.quantity;
    })
  }

  addItem(item : Item) {
    item.quantity = item.quantity + 1;
    this.totalPrice += item.price;
  }

  removeItem(item : Item) {
    item.quantity = item.quantity - 1;
    if(item.quantity <= 0) {
     for(let i in this.items) {
       if(this.items[i].id == item.id)
        this.items.splice(+i, 1);
     }
    }
    this.calculateTotal();
  }

  print() {
    let result : Result = {items : [...this.items], totalPrice : this.totalPrice, paid : this.paid, changed : this.paid - this.totalPrice};
    this.resultGot.emit(result);
    setTimeout(() => window.print(),100);
    this.items.length = 0;
    this.totalPrice = 0;
    this.paid = 0;
  }

  ngOnChanges() {
    this.calculateTotal();
  }

  ngOnInit(): void {
  }

}
