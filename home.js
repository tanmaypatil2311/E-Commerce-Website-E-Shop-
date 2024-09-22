let product_cnt = document.getElementById("product_cnt")

fetch("https://dummyjson.com/products").then((res) => {
    return res.json()
}).then((result) => {
    let input = ""
    console.log(result.products)
    let { products } = result
    localStorage.setItem("all_product", JSON.stringify(products))

    products.map((product) => {
        let product_img = product.images[0]
        console.log(product_img)

        let product_name = product.title
        console.log(product_name)

        let product_rating = product.rating
        console.log(product_rating)

        let prodcut_category = product.category
        console.log(prodcut_category)

        let product_price = product.price
        console.log(product_price)

        let product_id = product.id

        input += `
        <div class="col-12 col-lg-4 col-sm-6 col-md-6">
            <div class="cart">
                <div class="image">
                    <img src="${product_img}" alt="${product_name}" />
                </div>
                <div class="down_cnt">
                    <div class="rating-category">
                        <h5>${prodcut_category}</h5>
                        <h6> <i class="fa-solid fa-star"></i>${product_rating}</h6>
                    </div> 
                    <div class="name"
                    <h5>${product_name}</h5>
                    </div>
                    <div class="price_btn">
                    <p> Price : ${product_price}<p>
                    <button onClick="VieMore(${product_id})">view more</button>
                    </div>
                </div>
            </div>
        </div>      
        `
        product_cnt.innerHTML = input
    })

})

function VieMore(id) {
    localStorage.setItem("Id", id)
    window.location.href = "product.html"
    console.log("id", id)

}