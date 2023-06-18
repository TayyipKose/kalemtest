import { Component } from '@angular/core';
import { Cart } from '../module/cart-model/cartmodel';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn: boolean = true;

  constructor(public cart: Cart, private _loginService: LoginService) {
    this.isLoggedIn = this._loginService.isAuthenticated();
  }

  logout() {
    this._loginService.logout();
    this.isLoggedIn = this._loginService.isAuthenticated();
  }
}
