import { Component, OnInit } from '@angular/core';
import { Cart } from '../../cart-model/cartmodel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
