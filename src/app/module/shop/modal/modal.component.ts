import { Component, Inject, OnInit } from '@angular/core';
import { Cart } from '../../cart-model/cartmodel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  id: number;
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.id = Number(this.data.id);
  }

  delete(): void {
    this.dialogRef.close(true);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
