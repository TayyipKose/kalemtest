import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../module/cart-model/cartmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:9000/api/login';
  isLoggedIn: boolean = localStorage.getItem('isLoggedIn') === 'true';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    this.isLoggedIn = true;
    const user = { username, password };
    return this.http.post<any>(this.apiUrl, user);
  }

  logout() {
    alert('Çıkış Yapıldı!');
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
  }

  isAuthenticated(): boolean {
    //login logout durumu kontrol ediyor. true/false
    return this.isLoggedIn;
  }
}
