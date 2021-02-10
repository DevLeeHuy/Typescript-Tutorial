import {Product} from "./Product.js";
import {CartItem} from "./CartItem.js";
export class Cart{
    private _listItems: CartItem[] = [];
    public get listItems(): CartItem[] {
        return this._listItems;
    }
    public set listItems(value: CartItem[]) {
        this._listItems = value;
    }
    constructor(){}

    public add(product:CartItem):void{
        this.listItems.push(product);
    }
    public remove(product:CartItem):void{
        this.listItems.splice(this.listItems.indexOf(product),1);
    }
    
    public update(id:string, quantity:number = 1):void{
        this.listItems[this.exist(id)].quantity = quantity;
    }
    public isEmpty():boolean{
        if(this.listItems == null)
            return true;
        return false;
    }
    public getTotalPrice():number{
        return this.listItems.reduce((acc,val) =>acc + val.item.productPrice,0);     
    }

    public exist(ID: string):number{
        for(var item of this.listItems){
            if(item.item.productID === ID){
                return this.listItems.indexOf(item);
            }  
        }
        return null;
    }
}