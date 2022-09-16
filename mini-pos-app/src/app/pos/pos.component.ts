import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import { Result } from './cart/cart.component';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  constructor() { }

  selectedItems : Item[] = [];

  @Output() itemsCompleted = new EventEmitter<Result>();

  onItemClicked(item : Item) {
    let resultItem : Item | undefined = this.selectedItems.find((data) => {
      return data.id == item.id;
    });

    if(resultItem) {
      resultItem.quantity += 1;
    } else {
      this.selectedItems.push(item);
    }
    this.selectedItems = [...this.selectedItems];
  }

  onResultGot(result : Result) {
    this.itemsCompleted.emit(result);
    this.selectedItems.length = 0;
  }

  ngOnInit(): void {
  }
}
