import navbar from "/scripts/navbarAndFooter.js";
// navbarDivArea.innerHTML = navbar();
const continueBtn = document.querySelector(".continue-btn");

continueBtn.onclick = ()=>{
    window.location.href = "../index.html"
}

const products = JSON.parse(localStorage.getItem("cardProducts"));

const itemLen  = document.querySelector("#h1");
itemLen.innerHTML =`(${products.length} Items)`;

let total = 0;
products.map((a) => {
    total += parseInt(a.offPrice);
}, 0)

const leftDiv = document.querySelector(".leftContentDiv");
window.onload = () => {
    products.forEach((product) => {
        let totalBox = document.querySelector(".cart-head>span>h2");
        totalBox.innerHTML = `RS ${total}`;
        let leftBoxContent = `
        <div class="product-slide-box">
        <div class="img-left-div">
            <img width="100%" height="100%"  src="${product.imgUrl}" alt="">

          <div class="img-right-div">
            <p>${product.brand}</p>
            <h5>${product.description}</h5>
            <div>
              <h3>Color:<span>No Color</span></h3>
            </div>
            <div>
              <h3>Size:<span>${product.size}</span></h3>
            </div>
          </div>
          <div class = "delivery-availibility">
            <p>Typically delivered in 3-5 working days</p>
            <p>Cash On Delivery</p>
            <p>Express Store Pick Up</p>
            <div class="product-price">
              <p>Rs ${product.price}</p>
              <p>Rs ${product.offPrice}</p>
            </div>
          </div>
          </div>
          </div>
        `;
        let div = document.createElement('div');
        div.innerHTML = leftBoxContent;
        leftDiv.insertAdjacentElement("beforeend", div);
    })
}