import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
import { ShopService } from 'src/app/services/shop.service';
import { Cart } from 'src/app/module/cart-model/cartmodel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  productList: IProduct[] = [];
  selectedProduct: IProduct;
  constructor(private _shopService: ShopService, private _cart: Cart,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this._shopService.allProducts().subscribe(res => {
      if (res) {
        this.productList = res.data.data6 ?? [];
        console.log(this.productList);
      }
    })
  }
  addToCart(_product: IProduct) {
    this.selectedProduct = _product
    this._cart.addItem(this.selectedProduct);
    this.router.navigateByUrl('/basket')
  }

  cartDetails(_product: IProduct) {
    this.selectedProduct = _product;
  }
}
