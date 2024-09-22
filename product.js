// let cnt = document.getElementById("cnt")
let all_product = JSON.parse(localStorage.getItem("all_product"));
let local = localStorage.getItem("Id");

let unique_product = all_product.find((val) => {
    return val.id == local;
});
// console.log(unique_product)

let rating = Math.round(unique_product.rating);
let star = "";
for (let i = 0; i < rating; i++) star += '<i class="fa-solid fa-star"></i>';

let description = document.getElementById("description");
let review = document.getElementById("review");

description.innerHTML = `
    <div class="cart">
    <img src="${unique_product.images[0]}">
    <div class="product_details">
    <h3> Title : ${unique_product.title}</h3>
    <p> Description : ${unique_product.description}</p>
    <p> Price : ${unique_product.price}</p>
    <div id="rating-p"><p class="rating"> ${star}</p>
    <p> ${unique_product.rating}</p></div>
    <p> Stock : ${unique_product.stock}</p>
    <p> Warranty Information : ${unique_product.warrantyInformation}</p>
    <p> Return Policy : ${unique_product.returnPolicy}</p>
    <button id="addToCart">Add To Cart</button>
    </div>
    </div>
`;

document.getElementById("addToCart").addEventListener("click", () => {
    addproduct(unique_product)
})



let reviews_imf = unique_product.reviews[0];

console.log(reviews_imf);
review.innerHTML = `
<div class="user_review">
        <div class="reviews_imf">
        <div class="user">
        <p><i class="fa-solid fa-user-large"></i></p>
        <div class="user_name">
        <p> ${reviews_imf.reviewerName}</p>
        <p> ${reviews_imf.reviewerEmail}</p>
        </div>
        </div>
        <div class ="review">
        <p> Rating : ${reviews_imf.rating}</p>
        <p> date : ${reviews_imf.date}</p>
        <p> comment : ${reviews_imf.comment}</p>
        </div>
        </div>      
        </div>
    `;


// add cart
function addproduct(p) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let check_prod = cart.some((v) => { return v.id == p.id })
        // console.log(check_prod)
    if (!check_prod) {
        cart.push(p)
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("Product has been added to cart")

    } else {
        alert("Product is already added")
    }
}