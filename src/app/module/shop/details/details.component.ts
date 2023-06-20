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
  id: string | null;
  title: string | null;
  constructor(private _shopService: ShopService, private rout: ActivatedRoute) {
    this.id = rout.snapshot.paramMap.get('id');
    this.title = rout.snapshot.paramMap.get('title');
  }

  ngOnInit(): void { }

}
