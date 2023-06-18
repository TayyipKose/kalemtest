import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../module/cart-model/cartmodel';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  constructor(public cart: Cart, private _loginService: LoginService) { }


  logout() {
    this._loginService.logout();
    this.isLoggedIn = true;
  }
}
