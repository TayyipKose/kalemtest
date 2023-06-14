import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HttpClientModule } from '@angular/common/http';
import { CartSummartComponent } from './cart-summart/cart-summart.component';
import { BasketComponent } from './basket/basket.component';
import { Cart } from '../cart-model/cartmodel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShopComponent,

    CartSummartComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [Cart]
})
export class ShopModule { }
