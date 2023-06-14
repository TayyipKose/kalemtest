import { compileInjectable } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { IProduct } from "src/app/model/iproduct";


@Injectable()
export class Cart {
    public basketItems: CartItem[] = [];
    public itemCount: number = 0; //toplam ürün sayısı
    public total: number = 0; //toplam fiyat

    addItem(_product: IProduct, _quantity: any = 1) {
        let item = this.basketItems.find(i => i.product.id === _product.id);
        if (item != undefined) {
            item.adet += _quantity;
        } else {
            this.basketItems.push(new CartItem(_product, _quantity))
        }
        this.calculate();
    }

    calculate() {
        this.itemCount = 0;
        this.total = 0;
        this.basketItems.forEach(x => {
            this.itemCount += x.adet;
            this.total += (x.adet * x.product.price);
        })
    }
    updateQuantity(_product: IProduct, _quantity: number,) {
        const index = this.basketItems.findIndex(i => i.product.id === _product.id);
        if (index !== -1) {
            this.basketItems[index].adet = _quantity
        }
        else if (index < 1) {
            this.removeItem(_quantity);
        }

        this.calculate();
    }
    removeItem(_id: number) {
        let index = this.basketItems.findIndex(i => i.product.id == _id);
        this.basketItems.splice(index, 1); //indexten itibaren 1 elemanı siler.
        this.calculate();
    }
    clear() {
        this.basketItems = [];
        this.itemCount = 0;
        this.total = 0;

    }
}

export class CartItem {
    constructor(public product: IProduct,
        public adet: number
    ) { }
}