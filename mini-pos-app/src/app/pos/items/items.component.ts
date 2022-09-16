import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Item, items } from 'src/app/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items : Item[] = [];

  @Output() itemClicked = new EventEmitter<Item>();

  constructor() { }

  addToCart(item : Item) {
    this.itemClicked.emit({...item});
  }

  ngOnInit(): void {
    this.items = items;
  }

}
