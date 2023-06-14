import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from '../../basket/cart-model/cartmodel';

@Component({
  selector: 'app-cart-summart',
  templateUrl: './cart-summart.component.html',
  styleUrls: ['./cart-summart.component.scss']
})
export class CartSummartComponent implements OnInit, OnChanges {

  constructor(public xcart: Cart) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }




}
