import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.scss']
})
export class LoginErrorComponent {
  constructor(public _loginService: LoginService, public dialogRef: MatDialogRef<LoginErrorComponent>) { }


  login() {
    this.dialogRef.close('login');
  }
  close() {
    this.dialogRef.close();
  }
}
