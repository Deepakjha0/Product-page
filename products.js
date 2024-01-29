var loginbtn = document.getElementById("login-btn");
if (
  JSON.parse(localStorage.getItem("isLoggedIn")) == false ||
  JSON.parse(localStorage.getItem("isLoggedIn")) == null
) {
  location.assign("http://127.0.0.1:5500/index.html");
}
if (JSON.parse(localStorage.getItem("isLoggedIn")) == null) {
  localStorage.setItem("isLoggedIn", false);
} else if (JSON.parse(localStorage.getItem("isLoggedIn")) == false) {
  loginbtn.innerText = "Login";
} else {
  loginbtn.innerText = "Logout";
}

function changeStatus() {
  if (JSON.parse(localStorage.getItem("isLoggedIn")) == false) {
    localStorage.setItem("isLoggedIn", true);
    loginbtn.innerText = "Logout";
  } else {
    localStorage.setItem("isLoggedIn", false);
    loginbtn.innerText = "Login";
    location.assign("http://127.0.0.1:5500/index.html")
  }
}

{/* <div class="product-card">
            <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="I phone">
            <h3>iphone 9</h3>
            <p>$549</p>
            <p>4.69/5</p>
        </div> */}

        var productsWrapper = document.getElementById("products-wrapper")

$.get("https://dummyjson.com/products", function(response){
    var products = response.products;
    for(i=0; i<products.length; i++){
        productsWrapper.innerHTML +=`<div onclick = "cardClickedFunction(${i+1})" class="product-card">
        <img src="${products[i].thumbnail} " alt="I phone">
        <h3>${products[i].title} </h3>
        <p>${products[i].price} </p>
        <p>${products[i].rating} </p>
    </div>`
    }
})

function cardClickedFunction(i){
    location.assign("http://127.0.0.1:5500/product.html?id="+i)
}
