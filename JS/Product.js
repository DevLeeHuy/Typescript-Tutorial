export class Product {
    constructor(id, name, description, price) {
        this._productID = id;
        this._productName = name;
        this._productPrice = price;
        this._productDescription = description;
    }
    get productID() {
        return this._productID;
    }
    set productID(value) {
        this._productID = value;
    }
    get productName() {
        return this._productName;
    }
    set productName(value) {
        this._productName = value;
    }
    get productDescription() {
        return this._productDescription;
    }
    set productDescription(value) {
        this._productDescription = value;
    }
    get productPrice() {
        return this._productPrice;
    }
    set productPrice(value) {
        this._productPrice = value;
    }
    get productImage() {
        return this._productImage;
    }
    set productImage(value) {
        this._productImage = value;
    }
}
