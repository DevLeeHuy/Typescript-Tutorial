import { Product } from "./Product.js";
export class ProductRepo {
    constructor() {
        this._listProducts = [];
        this.listProducts.push(new Product("001", "Iphone Xs", "Ra lâu rồi", 10));
        this.listProducts.push(new Product("002", "Iphone Xs max", "Ra cũng hơi lâu rồi", 10.5));
        this.listProducts.push(new Product("003", "Iphone 11", "Mới ra đc 1 năm", 11));
        this.listProducts.push(new Product("004", "Iphone 11 pro max", "Ra sau 11 một tí", 11.5));
        this.listProducts.push(new Product("005", "Iphone 12", "Mới ra đây", 12));
        this.listProducts.push(new Product("006", "Iphone 12 pro max", "Cũng mới ra", 12.5));
    }
    get listProducts() {
        return this._listProducts;
    }
    set listProducts(value) {
        this._listProducts = value;
    }
    getItems() {
    }
    static getItemByID(id, list) {
        let newProduct = new Product();
        for (var product of list) {
            if (product.productID === id) {
                return product;
            }
        }
        return null;
    }
}
