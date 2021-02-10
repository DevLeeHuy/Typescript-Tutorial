export class Product{
    private _productID: string;   
    private _productName: string;  
    private _productDescription: string;
    private _productPrice: number;
    private _productImage: string;

 
    public get productID(): string {
        return this._productID;
    }
    public set productID(value: string) {
        this._productID = value;
    }
    public get productName(): string {
        return this._productName;
    }
    public set productName(value: string) {
        this._productName = value;
    }
    public get productDescription(): string {
        return this._productDescription;
    }
    public set productDescription(value: string) {
        this._productDescription = value;
    }
    public get productPrice(): number {
        return this._productPrice;
    }
    public set productPrice(value: number) {
        this._productPrice = value;
    }
    public get productImage(): string {
        return this._productImage;
    }
    public set productImage(value: string) {
        this._productImage = value;
    }
    
    



    public constructor(id?:string, name?:string, description?:string, price?:number){
        this._productID = id;
        this._productName = name;
        this._productPrice = price;
        this._productDescription = description;
    }
}