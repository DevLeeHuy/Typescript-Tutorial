export class Cart {
    constructor() {
        this._listItems = [];
    }
    get listItems() {
        return this._listItems;
    }
    set listItems(value) {
        this._listItems = value;
    }
    add(product) {
        this.listItems.push(product);
    }
    remove(product) {
        this.listItems.splice(this.listItems.indexOf(product), 1);
    }
    update(id, quantity = 1) {
        this.listItems[this.exist(id)].quantity = quantity;
    }
    isEmpty() {
        if (this.listItems == null)
            return true;
        return false;
    }
    getTotalPrice() {
        return this.listItems.reduce((acc, val) => acc + val.item.productPrice, 0);
    }
    exist(ID) {
        for (var item of this.listItems) {
            if (item.item.productID === ID) {
                return this.listItems.indexOf(item);
            }
        }
        return null;
    }
}
