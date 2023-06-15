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
  x: number = 1;
  isShow: boolean = false;
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

  add(_product: IProduct) {
    if (this.x == 0) {
      this._cart.removeItem(_product.id);
      this.isShow = !this.isShow;
    }
    this.x = this.x + 1;
  }

  remove(_product: IProduct) {
    if (this.x == 0) {
      this._cart.removeItem(_product.id)
    }
    else {
      this.x = this.x - 1;
    }
  }


  openDetails(_product: IProduct) {
    this.isShow = !this.isShow;
    if (this.x <= 0) {
      this.isShow = !this.isShow;
    }
    else {
      this.selectedProduct = _product;
    }

  }

  selected(_product: IProduct) {
    this.selectedProduct = _product;
  }
}
