import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PosComponent } from './pos/pos.component';
import { PrintComponent } from './print/print.component';
import { ItemsComponent } from './pos/items/items.component';
import { ItemComponent } from './pos/items/item/item.component';
import { CartComponent } from './pos/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PosComponent,
    PrintComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
