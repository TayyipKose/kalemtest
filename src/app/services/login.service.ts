import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:9000/api/login';
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.http.post<any>(this.apiUrl, user);
  }

  logout() {
    this.isLoggedIn = true;
    alert('Çıkış Yapıldı!');
  }

  isAuthenticated(): boolean {
    //login logout durumu kontrol ediyor. true or
    return this.isLoggedIn;
  }
}
