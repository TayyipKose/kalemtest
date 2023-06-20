import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../model/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  apiUrl: string = 'http://localhost:9000/api/products/id';
  constructor(private http: HttpClient) { }


  getProductId(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.apiUrl + 'id');


  }
}
