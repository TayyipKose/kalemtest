import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message: string;
  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.login;
  }
  login() {
    this._loginService.login(this.username, this.password).subscribe(res => {
      if (res) {
        console.log(res);
        alert('Giriş Başarılı');
        this._loginService.isLoggedIn = true;
        this.router.navigateByUrl('/basket');
      }
      (error) => {
        console.warn(error);
        this.router.navigateByUrl('/login');
      }
    })
  }
}
