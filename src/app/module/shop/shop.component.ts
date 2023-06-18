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
  isShow: boolean = false;//modalın açılıp kapanması
  isSpanOpen: boolean = false; //span içindeki kapat butonu için
  selectedProduct: IProduct;//
  productList: IProduct[] = [];

  constructor(private _shopService: ShopService, public cart: Cart,
    private router: Router) { }

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
    this.cart.addItem(this.selectedProduct);
    this.router.navigateByUrl('/basket')
  }

  cartDetails(item: any) {
    this.router.navigate(['/shop/details', item.id]);
  }

  selected(_product: IProduct) {
    this.selectedProduct = _product;
  }

  getProductCountById(id: number) {
    let item = this.cart.basketItems.find(i => i.product.id === id);
    if (item != undefined) {
      return item.adet
    } else {
      return 0
    }
  }
}
