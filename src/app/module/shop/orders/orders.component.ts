import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
import { Cart } from '../../cart-model/cartmodel';
import { OrderService } from 'src/app/services/order.service';
import { LoginService } from 'src/app/services/login.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderedProducts: IProduct[];
  totalPrice: number;

  constructor(private cart: Cart, private orderService: OrderService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void { }
  orders = [
    { siparisNo: 1, adet: 2, tarih: new Date(), toplamFiyat: 1500.00 },
    { siparisNo: 2, adet: 3, tarih: new Date(), toplamFiyat: 1699.99 },
    { siparisNo: 3, adet: 4, tarih: new Date(), toplamFiyat: 1999.99 },
    { siparisNo: 4, adet: 5, tarih: new Date(), toplamFiyat: 2399.99 },
    { siparisNo: 5, adet: 2, tarih: new Date(), toplamFiyat: 1200.00 },
    { siparisNo: 6, adet: 2, tarih: new Date(), toplamFiyat: 3699.99 },
    { siparisNo: 7, adet: 4, tarih: new Date(), toplamFiyat: 2499.99 },
    { siparisNo: 8, adet: 5, tarih: new Date(), toplamFiyat: 2399.99 },
  ];
  ;
  logout() {
    this._loginService.logout();
    this.router.navigateByUrl('/');
  }
}
