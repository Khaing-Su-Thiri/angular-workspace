import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item : Item = {id : 0, name : "", price : 0, image : "", quantity : 0};

  ngOnInit(): void {
  }

}
