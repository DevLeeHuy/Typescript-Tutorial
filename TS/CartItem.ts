import {Product} from "./Product.js";

export class CartItem{
    private _item: Product;   
    private _isChecked: boolean =true;   
    private _quantity: number =1; 

    public get item(): Product {
        return this._item;
    }
    public set item(value: Product) {
        this._item = value;
    }
    public get isChecked(): boolean {
        return this._isChecked;
    }
    public set isChecked(value: boolean) {
        this._isChecked = value;
    }
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
   
    public getSubtotal():number{
        return this.item.productPrice * this.quantity;
    }

    constructor(product:Product){
        this._item = product;
    }

}