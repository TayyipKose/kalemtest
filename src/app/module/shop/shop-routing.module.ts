import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
  { path: 'shop/details/:id', component: DetailsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
