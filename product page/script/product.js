import navbar from "/scripts/navbarAndFooter.js";
navbarDivArea.innerHTML = navbar();
// scripts\navbarAndFooter.js
// console.log(navbar)



let slideData = [{
        imgUrl: "https://cdn.dynamicyield.com/api/8770829/images/12aee4ee0a2a3__UCB--plp--1232-by-216-WEB.jpg"
    },
    {
        imgUrl: "https://cdn.dynamicyield.com/api/8770829/images/23af72993b1be__Tommy-Hilfifer-PLP-Static.jpg"
    },
    {
        imgUrl: "https://cdn.dynamicyield.com/api/8770829/images/251d4ebf3aafe__plp---ck-jeans------web---static.jpg"
    },
    {
        imgUrl: "https://cdn.dynamicyield.com/api/8770829/images/1808594a253d1__plp---jack-_-jones----web---static.jpg"
    },

]

slideData.map(function (item) {
    var slider = document.getElementById("slider")
    var div = document.createElement("div");
    div.setAttribute("class", "slides")
    var img = document.createElement("img");
    img.setAttribute("src", item.imgUrl);
    slider.append(div)
    div.append(img)

});

var slideIndex = 0;


function showSlides() {

    var slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slideData.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideIndex++;
    if (slideIndex > slideData.length - 1) {
        slideIndex = 0
    }

    setTimeout(showSlides, 2000); // Change image every 2 seconds

}
showSlides();

let data;


async function allProducts(){

    let res=await fetch("https://shopperstop-backend.herokuapp.com/products");
    let data=await res.json()
    
    return data;

    
}  

async function showProduct(data) {
    console.log(data);
    if (data == undefined) {
        let allData = await allProducts();
        data = allData;
    }
    

    

    //let productData = await allProducts;
    

    let box = document.getElementById("box")
    data.forEach(item => {
        let div = document.createElement("div")
        div.setAttribute("class", "cardDiv")
        div.onclick = function () {
            localStorage.setItem("cardItem", JSON.stringify(item))
            window.location.href = "cart.html"
        }
        let img = document.createElement("img");
        img.src = item.imgUrl.length == 1 ? item.imgUrl[0] :item.imgUrl;
        let brand = document.createElement("h3");
        brand.setAttribute("id", "brand")
        brand.innerText = item.brand;
        let description = document.createElement("p")
        description.innerText = item.description;

        let priceDiv = document.createElement("div")
        priceDiv.setAttribute("class", "priceDiv")

        let price = document.createElement("h3");
        price.setAttribute("class", "price")
        price.innerHTML = "&#x20B9;" + item.price;
        let offPrice = document.createElement("h3");
        offPrice.innerHTML = "&#x20B9;" + item.offPrice
        offPrice.setAttribute("class", "offPrice")
        let discount = document.createElement("h3")
        discount.innerText = item.discount
        discount.setAttribute("class", "dis")

        div.append(img, brand, description, priceDiv);
        priceDiv.append(price, offPrice, discount)
        box.append(div)
    });
}

showProduct(data)
let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

showBrands.addEventListener("click", showBrand)
showOffers.addEventListener("click", showOffer)
showPrices.addEventListener("click", showPrice)
showColors.addEventListener("click", showColor)
showDeliverys.addEventListener("click", showDelivery)



sortByAdidass.addEventListener("click", function () {
    sortByAdidas(data)
})
sortByStops.addEventListener("click", function () {
    sortByStop(data)
})
sortByLifes.addEventListener("click", function () {
    sortByLife(data)
})
sortByInfuses.addEventListener("click", function () {
    sortByInfuse(data)
})
sortByFratinis.addEventListener("click", function () {
    sortByFratini(data)
})
sortByFratinis.addEventListener("click", function () {
    sortByFratini(data)
})
sortByFratinis.addEventListener("click", function () {
    sortByFratini(data)
})

// sory by colors

oranges.addEventListener("click", function () {
    orange(data)
})
whites.addEventListener("click", function () {
    white(data)
})
blacks.addEventListener("click", function () {
    black(data)
})
yellows.addEventListener("click", function () {
    yellow(data)
})
blues.addEventListener("click", function () {
    blue(data)
})

// oranges.addEventListener("click",orange)
sortByOff30s.addEventListener("click", function () {
    sortByOff30(data)
})
sortByOff50s.addEventListener("click", function () {
    sortByOff50(data)
})
sortByOff70s.addEventListener("click", function () {
    sortByOff70(data)
})

lowToHeighs.addEventListener("click", function () {
    lowToHeigh(data)
})

heighToLows.addEventListener("click", function () {
    heighToLow(data)
})



function showBrand() {
    let sortbrand = document.getElementById("sortbrand");
    count++
    if (count % 2 !== 0) {
        sortbrand.style.display = "block"

    } else sortbrand.style.display = "none"

}

function showOffer() {
    count1++
    let sortbrand = document.getElementById("sortoffer");
    if (count1 % 2 !== 0) {
        sortbrand.style.display = "block"

    } else sortbrand.style.display = "none"

}

function showPrice() {
    count2++
    let sortbrand = document.getElementById("sortprice");
    if (count2 % 2 !== 0) {
        sortbrand.style.display = "block"

    } else sortbrand.style.display = "none"
}

function showDelivery() {
    let sortDelivery = document.getElementById("sortDelivery");
    count3++
    if (count3 % 2 != 0) {
        sortDelivery.style.display = "block"
    } else sortDelivery.style.display = "none"
}

function showColor() {
    let sortColor = document.getElementById("sortColor");
    count4++
    if (count4 % 2 != 0) {
        sortColor.style.display = "block"
    } else sortColor.style.display = "none"
}

async function sortByAdidas(data) {
    let allData = await allProducts();
    data = allData;

    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.brand == "Adidas" 
    ) 
    showProduct(result);
}

async function sortByLife(data) {
    let allData = await allProducts();
    data = allData;

    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.brand == "Life"
    );


    showProduct(result)
}

async function sortByInfuse(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.brand == "Infuse"
    );


    showProduct(result)
}

async function sortByStop(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.brand == "Stop"
    );


    showProduct(result)
}

async function sortByFratini(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.brand == "Fratini"
    );


    showProduct(result)
}

async function sortByOff30(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.discount >= "30% off"
    );


    showProduct(result)
}

async function sortByOff50(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.discount >= "50% off"
    );


    showProduct(result)
}

async function sortByOff70(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.discount >= "70% off"
    );


    showProduct(result)
}

//sort by low to heigh

async function lowToHeigh(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.sort((a, b) => a.price - b.price)
    showProduct(result)

}

//sort by heigh to low

async function heighToLow(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.sort((a, b) => b.price - a.price)
    showProduct(result)

}

//sort by color

async function orange(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.color == "orange"
    );


    showProduct(result)
}

async function white(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.color == "white"
    );


    showProduct(result)
}

async function black(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.color == "black"
    );


    showProduct(result)
}

async function blue(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.color == "blue"
    );


    showProduct(result)
}

async function yellow(data) {
    let allData = await allProducts();
    data = allData;
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item =>
        item.color == "yellow"
    );


    showProduct(result)
}


// const showLoginPage = () => {
//     window.open("../signup-signin/signUp.html")
// }
// accountCircle.addEventListener("click", showLoginPage)