import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent implements OnInit {

  constructor(public _loginService: LoginService, public dialogRef: MatDialogRef<LogoutModalComponent>) { }
  ngOnInit(): void {
  }

  delete(): void {
    this.dialogRef.close(true);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
