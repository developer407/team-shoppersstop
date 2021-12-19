const products = JSON.parse(localStorage.getItem("cardProducts"));
const sampleCart = document.querySelector(".selected-products-container")

if (!products || products.length == 0) {
  sampleCart.innerHTML = `<div>
    <h2>Shopping Bag</h2>
    <p>Your shopping bag is empty</p>
    <div class = "continue-btn">
      <h3>CONTINUE SHOPPING</h3>
    </div>
  </div>`
  const continueBtn = document.querySelector(".continue-btn");
  continueBtn.onclick = () => {
    window.location.href = "../index.html"
  }
  const mainCart = document.querySelector(".add-to-cart-items");
  mainCart.innerHTML = "";
} else {
  let total = 0;
  products.map((a) => {
    total += parseInt(a.offPrice);
  }, 0)
  let offTotal = 0;
  products.map((a) => {
    offTotal += parseInt(a.price);
  }, 0)

  const itemLen = document.querySelector("#h1");
  itemLen.innerHTML = `(${products.length} Items)`;

  const totalBox = document.querySelector(".cart-head>span>h2");
  totalBox.innerHTML = `RS ${total}`;

  const subTotal = document.querySelector("#sub-total");
  subTotal.textContent = `RS ${total}`;
  const offDis = document.querySelector("#Offer-Discount");
  offDis.textContent = `RS ${total-offTotal}`;
  const payAmt = document.querySelector("#Payable-Amount");
  payAmt.textContent = `RS ${total}`;
  const saved = document.querySelector("#saved");
  saved.textContent = `RS ${total-offTotal}`;
  const leftDiv = document.querySelector(".leftCont");
  window.onload = () => {
    products.forEach((product) => {

      let leftBoxContent = `
        <div class="product-slide-box">
        <div class="img-left-div">
            <img width="100%" height="100%"  src="${product.imgUrl}" alt=""></div>
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
              <button class="remBtn">Remove Item</button>
            </div>
          </div>
          </div>
          </div>
        `;
      let div = document.createElement('div');
      div.innerHTML = leftBoxContent;
      leftDiv.insertAdjacentElement("beforeend", div);
      let btn = document.querySelectorAll(".remBtn");
      btn.forEach((b, i) => {
        b.onclick = () => {
          products.splice(i, 1);
          localStorage.setItem("cardProducts", JSON.stringify(products));
          window.location.reload();
        }
      })


    })
  }
}
const checkout = () => {
  console.log("here")
  window.location.href = "../product page/Address.html"

}