export class CartItem {
    constructor(product) {
        this._isChecked = true;
        this._quantity = 1;
        this._item = product;
    }
    get item() {
        return this._item;
    }
    set item(value) {
        this._item = value;
    }
    get isChecked() {
        return this._isChecked;
    }
    set isChecked(value) {
        this._isChecked = value;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
    getSubtotal() {
        return this.item.productPrice * this.quantity;
    }
}
