import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../cart-model/cartmodel';
import { IProduct } from 'src/app/model/iproduct';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginErrorComponent } from '../login-error/login-error.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  adet: number;
  constructor(public _cart: Cart, private router: Router, private _loginService: LoginService, private dialog: MatDialog) { }



  //
  completeOrder(): void {
    if (this._loginService.isLoggedIn == true) {
      this.router.navigateByUrl('/orders');
      this._cart.clear();
    }
    else {
      this.openDialog2();
    }
  }


  //////////
  openDialog(_id: number) {
    const modalRef = this.dialog.open(ModalComponent, {
      id: 'todoListDeleteModal',
      width: '250px',
      data: {
        _id
      }
    });

    modalRef.afterClosed().toPromise().then((modalres) => {
      if (modalres) {
        this._cart.removeItem(_id);
      }
    });
  }


  //////////
  openDialog2() {
    const modalRef = this.dialog.open(LoginErrorComponent, {
      id: 'login',
      width: '250px',
      data: {
      }
    });

    modalRef.afterClosed().toPromise().then((modalres) => {
      if (modalres === 'login') {
        this.router.navigateByUrl('/login')
      }
    });
  }
}
