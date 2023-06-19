import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../cart-model/cartmodel';
import { IProduct } from 'src/app/model/iproduct';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  adet: number;
  loginControl: boolean = false;

  constructor(public _cart: Cart, private router: Router, private _loginService: LoginService) { }

  ngOnInit(): void { }

  updateAdet(_product: IProduct, x: number) {
    this.adet = x;
    this._cart.updateQuantity(_product, this.adet)

    if (this.adet < 1) {
      this._cart.removeItem(_product.id);
    }
  }

  //
  completeOrder(): void {
    if (this._loginService.isLoggedIn == true) {
      this.router.navigateByUrl('/order');
      this._cart.clear();
    } else {
      alert('Sipariş Vermek İçin Önce Lütfen Giriş Yapınız!')
      this.router.navigateByUrl('/login');
    }
  }
  openDialog(_id: number) {

  }

}
