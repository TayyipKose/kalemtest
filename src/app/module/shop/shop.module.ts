import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HttpClientModule } from '@angular/common/http';
import { CartSummartComponent } from './cart-summart/cart-summart.component';
import { BasketComponent } from './basket/basket.component';
import { Cart } from '../cart-model/cartmodel';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ContactComponent } from './contact/contact.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    ShopComponent,
    CartSummartComponent,
    BasketComponent,
    NavbarComponent,
    LoginComponent,
    DetailsComponent,
    ModalComponent,
    ContactComponent,
    LogoutModalComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [Cart]
})
export class ShopModule { }
