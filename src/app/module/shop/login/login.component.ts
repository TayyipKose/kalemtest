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
          alert('Giriş Başarılı!');
          this.router.navigateByUrl('/basket');
        }
        else {
          this.loginService.isLoggedIn == false;
        }
      },
      (error) => {
        alert('Giriş Başarısız')
        console.warn(error);
        this.router.navigateByUrl('/login');
      }
    );
  }

  ////
  checkLoginStatus() {
    // Sayfa yenilendiğinde veya bileşen yeniden yüklendiğinde oturum durumunu kontrol eder
    //sonra bunu ngOnInit içine yazacağız ki sürekli isLoggedIn değişkeninin durumunu kontrol edelim.
    this.loginService.isAuthenticated();
  }
}
