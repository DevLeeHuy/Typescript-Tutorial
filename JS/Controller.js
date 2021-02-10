import { ProductRepo } from "./ProductRepo.js";
import { Cart } from "./Cart.js";
import { CartItem } from "./CartItem.js";
var repo = new ProductRepo();
var listProducts = repo.listProducts;
var cart = new Cart();
var listItems = cart.listItems;
//Initially show product
showProduct();
//Buy a product
var buyButtons = document.querySelectorAll(".list-product button");
buyButtons.forEach((e) => {
    e.addEventListener("click", (event) => {
        event.preventDefault();
        let ID = e.parentElement.querySelector("span").innerText;
        let quantity = +e.parentElement.querySelector("input").value;
        e.parentElement.querySelector("input").value = "1";
        buyProduct(ID, quantity);
        showCart();
    });
});
//Show product by html
function showProduct() {
    var htmlPro = listProducts.reduce((acc, pro) => acc + creProDiv(pro), ``);
    document.querySelector(".list-product").innerHTML = htmlPro;
}
function creProDiv(pro) {
    let htmlProduct = ` 
        <div class="item">
            <span>${pro.productID}</span>
            <img src="./IMG/sp1.jpg" alt="Ảnh sản phẩm">
            <h3>${pro.productName}</h3>
            <p>${pro.productDescription}</p>
            <input type="number" name="" id="" value = "1">
            <button>$${pro.productPrice}</button>
        </div>
            `;
    return htmlProduct;
}
//Show cart by html
function showCart() {
    var htmlcart = listItems.reduce((acc, item) => acc + creCartDiv(item), ``);
    document.querySelector(".cart").innerHTML = `<tr>
                <th>Sure?</th>
                <th>No</th>
                <th>Item name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>` + htmlcart;
    document.querySelector(".totalCost").innerHTML = '$' + cart.getTotalPrice();
    var removeBtn = document.querySelectorAll(".remove-btn");
    removeBtn.forEach((e) => {
        e.addEventListener("click", () => {
            let item = e.closest("tr");
            let ID = item.children[1].innerHTML;
            cart.remove(listItems[cart.exist(ID)]);
            item.remove();
            showCart();
        });
    });
    var update = document.querySelectorAll(".update-btn");
    update.forEach((element) => {
        element.addEventListener("blur", () => {
            let quantity = +element.value;
            let item = element.closest("tr");
            let ID = item.children[1].innerHTML;
            cart.update(ID, quantity);
            showCart();
        });
    });
}
function creCartDiv(cartItem) {
    let htmlCart = `
        <tr>
            <td><input type="checkbox" name="" id="" checked></td>
            <td>${cartItem.item.productID}</td>
            <td>${cartItem.item.productName}</td>
            <td><input type="number" class="update-btn" value="${cartItem.quantity}" min="1"></td>
            <td>$${cartItem.item.productPrice * cartItem.quantity}</td>
            <td><i class="fas fa-minus-square remove-btn"></i></td>
        </tr>
    `;
    return htmlCart;
}
/*    Handle ShoppingCart   */
//Buy a product
function buyProduct(proID, quantity = 1) {
    if (cart.exist(proID) != null) {
        listItems[cart.exist(proID)].quantity += quantity;
    }
    else {
        let product = ProductRepo.getItemByID(proID, listProducts);
        let cartItem = new CartItem(product);
        cart.add(cartItem);
        listItems[listItems.length - 1].quantity = quantity;
    }
}
