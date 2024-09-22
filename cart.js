let cart_cnt = document.getElementById("cart_cnt");

let cart_product = JSON.parse(localStorage.getItem("cart"));
let input = ""
if (cart_product.length == 0) {
    console.log("Cart is empty")
} else {
    cart_product.map(product => {

        input += `
        <div class="up">
    <img src="${product.images[0]}">
    <div class="imf">
    <h4> ${product.title}</h4>
    <p> ${product.category}</p>
    <p> ${product.brand}</p>
    <p> Price : ${product.price}</p>
    </div>
    <div class="Rbtn">
        <button class="removetoCart" data-id="${product.id}"> Remove </button>
    </div>
    </div>
        `
        cart_cnt.innerHTML = input
    })



    let cart_local = localStorage.getItem("Id");
    console.log(cart_product)
    let Cart_product = cart_product.find((val) => {
        return val.id == cart_local;
    })
    console.log(Cart_product)


    // Add event listener to all remove buttons
    document.querySelectorAll(".removetoCart").forEach(button => {
        button.addEventListener("click", function() {
            let productId = this.getAttribute("data-id");
            removeCart(productId); // Pass the product ID to removeCart
        });
    });
}


// Remove cart function
function removeCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let check_prod = cart.some(v => v.id == productId);

    if (check_prod) {
        cart = cart.filter(v => v.id != productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product has been removed from the cart");
        location.reload(); // Reload the page to update cart
    } else {
        alert("Product is already removed or not in the cart");
    }
}