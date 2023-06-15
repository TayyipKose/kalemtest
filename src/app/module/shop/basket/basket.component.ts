import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../cart-model/cartmodel';
import { IProduct } from 'src/app/model/iproduct';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() adet: number;
  constructor(public _cart: Cart) { }

  ngOnInit(): void {

  }

  updateAdet(_product: IProduct, x: number) {
    this.adet = x;
    this._cart.updateQuantity(_product, this.adet)

    if (this.adet < 1) {
      this._cart.removeItem(_product.id);
    }
  }

}
