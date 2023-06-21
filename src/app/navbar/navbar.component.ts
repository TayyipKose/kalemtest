import { Component } from '@angular/core';
import { Cart } from '../module/cart-model/cartmodel';
import { LoginService } from '../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from '../module/shop/logout-modal/logout-modal.component';
import { UserModalComponent } from '../module/shop/user-modal/user-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn: boolean = true;

  constructor(private dialog: MatDialog, public cart: Cart, private _loginService: LoginService,
    private router: Router) {
    this.isLoggedIn = this._loginService.isAuthenticated();
  }

  logout() {
    this._loginService.logout();
    this.isLoggedIn = this._loginService.isAuthenticated();
  }

  openDialog2() {
    const modalRef = this.dialog.open(LogoutModalComponent, {
      id: 'todoListDeleteModal',
      width: '250px',
      data: {
      }
    });

    modalRef.afterClosed().toPromise().then((modalres) => {
      if (modalres) {
        this.logout();
      }
    });
  }
  openMenu() {
    const modalRef = this.dialog.open(UserModalComponent, {
      id: '',
      width: '125px',
      data: {}
    });

    modalRef.afterClosed().toPromise().then((modalres) => {
      if (modalres === 'logout') {
        this.logout();
      } else if (modalres === 'orders') {
        this.router.navigateByUrl('/orders');
      }
    });
  }
}