import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UserModalComponent>) { }

  ngOnInit(): void {
  }
  delete() {
    this.dialogRef.close('orders');
  }
  out() {
    this.dialogRef.close('logout');
  }
  closeModal() {
    this.dialogRef.close();
  }
}
