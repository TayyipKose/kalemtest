import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from 'src/app/module/cart-model/cartmodel';

@Component({
  selector: 'app-cart-summart',
  templateUrl: './cart-summart.component.html',
  styleUrls: ['./cart-summart.component.scss']
})
export class CartSummartComponent implements OnInit {
  isShow: boolean = false;

  constructor(public xcart: Cart) { }
  ngOnInit(): void { }
}
