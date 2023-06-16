import { compileInjectable } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { IProduct } from "src/app/model/iproduct";

interface CartItem {
    product: IProduct;
    adet: number;
}
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
            // this.basketItems.push(new CartItem(_product, _quantity))
            this.basketItems.push({ product: _product, adet: _quantity });
        }
        this.calculate();
    }

    plusCount(_product: IProduct) {
        let item = this.basketItems.find(i => i.product.id === _product.id);
        if (item != undefined) {
            item.adet += 1;
        }
        this.calculate();
    }
    removeCount(_product: IProduct) {
        let item = this.basketItems.find(i => i.product.id === _product.id);
        if (item != undefined) {
            if (item.adet > 0)
                item.adet -= 1;
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
            if (_quantity > 0) {
                this.basketItems[index].adet = _quantity;
            }
            else {
                this.removeItem(_product.id);
            }
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

// export class CartItem {
//     constructor(public product: IProduct,
//         public adet: number
//     ) { }
// }