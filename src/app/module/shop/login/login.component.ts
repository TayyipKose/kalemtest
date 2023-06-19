import { Component, OnInit } from '@angular/core';
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
  loginFailed: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  ////
  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (res) => {
        if (res) {
          this.loginService.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true')
          this.router.navigateByUrl('/basket');
        }
      },
      (error) => {
        this.loginFailed = true;
        console.warn(error);
        this.clearInputs();
        this.router.navigateByUrl('/login');
      }
    );
  }
  clearInputs() {
    this.username = '';
    this.password = '';
  }
  ////
  checkLoginStatus() {
    this.loginService.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  }
}
