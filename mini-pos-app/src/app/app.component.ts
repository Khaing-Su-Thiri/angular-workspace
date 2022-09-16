import { Component } from '@angular/core';
import { Result } from './pos/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-pos-app';

  result : Result = {items : [], totalPrice : 0, paid : 0, changed : 0};

  onItemsCompleted(result : Result) {
    this.result = result;
  }
}
