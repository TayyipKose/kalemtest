import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/model/iproduct';
import { LoginService } from 'src/app/services/login.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private _shopService: ShopService) { }

  ngOnInit(): void {

  }

}
