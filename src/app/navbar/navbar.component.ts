import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../module/cart-model/cartmodel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public cart: Cart) { }

}
