const cart_page = (data) => {
    return `<div id="imgDiv">
    <div id="imgs">
        <img src=${data.imgUrl[1]}>
        <img src=${data.imgUrl[2]}>
    </div>
    <div id="mainImg"><img src=${data.imgUrl[0]}></div>
    
    </div>
    <div id="div2">
    <h1>${data.brand}</h1>
    <h3>${data.description}</h3>
    <div id="price">
    <h3>₹${data.price}</h3>
    <h3>₹${data.offPrice}</h3>
    <h3>${data.discount}</h3>
    </div>
    <p>Includes all taxes</p>
    <div id="sizes"><span>SMALL</span><span>MEDIUM</span><span>LARGE</span><span>X-LARGE</span><span>XX-LARGE</span>
    </div><p>14 days easy return and exchange applicable for this item</p>
    <div>
    <i class="fas fa-share-alt fa-xl share"></i></i>
    <i class="fas fa-heart fa-xl heart"></i>
</i>
    <button id = "addToCart">ADD TO BAG</button></div>
    </div>`;
}
export default cart_page;
