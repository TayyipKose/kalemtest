import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService implements OnInit {

  constructor(private _http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  ngOnInit(): void {
    this.allProducts();
  }


  allProducts(): Observable<any> {
    return this._http.get<IProduct[]>(`${this.baseUrl}/products`);
  }


  getProductById(id: string): Observable<IProduct> {
    return this._http.get<IProduct>(this.baseUrl + '/products/' + id)
  }
}
