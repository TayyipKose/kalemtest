import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/model/iproduct';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { ShopService } from 'src/app/services/shop.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: any;
  title: string | null;
  product: IProduct | undefined;
  constructor(private _shopService: ShopService, private rout: ActivatedRoute,
    private http: HttpClient,
    private _productDetails: ProductDetailService) {
    this.id = rout.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productId();
  }

  productId() {
    this._shopService.getProductById(this.id).subscribe({
      next: (response: any) => {
        if (response) {
          this.product = response.data;
          console.log(this.product);
        } else {
          alert('İşlem Başarısız!');
        }
      },
      error: (error) => {
        console.warn(error);
        console.warn('İşlem Başarısız!');
      }
    });
  }

}  
