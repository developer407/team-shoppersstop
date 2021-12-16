let slideData = [
    {imgUrl: "https://cdn.dynamicyield.com/api/8770829/images/12aee4ee0a2a3__UCB--plp--1232-by-216-WEB.jpg" },
    {imgUrl:"https://cdn.dynamicyield.com/api/8770829/images/23af72993b1be__Tommy-Hilfifer-PLP-Static.jpg"},
    {imgUrl:"https://cdn.dynamicyield.com/api/8770829/images/251d4ebf3aafe__plp---ck-jeans------web---static.jpg"},
    {imgUrl:"https://cdn.dynamicyield.com/api/8770829/images/1808594a253d1__plp---jack-_-jones----web---static.jpg"},

]

slideData.map(function (item) {
    var slider=document.getElementById("slider")
    var div = document.createElement("div");
    div.setAttribute("class","slides")
    var img = document.createElement("img");
    img.setAttribute("src", item.imgUrl);
    slider.append(div)
    div.append(img)

});

var slideIndex = 0;


function showSlides() {
 
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slideData.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  slideIndex++;
  if (slideIndex > slideData.length-1) {slideIndex = 0}
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
    
}
showSlides();


let data = [
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Fratini",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "999",
        offPrice: "1399",
        discount: "50% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Adidas",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "899",
        offPrice: "1399",
        discount: "70% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Adidas",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "799",
        offPrice: "1399",
        discount: "30% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Fratini",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "399",
        offPrice: "1399",
        discount: "50% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Fratini",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "599",
        offPrice: "1399",
        discount:"30% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Infuse",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "499",
        offPrice: "1399",
        discount: "70% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Life",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "4399",
        offPrice: "1399",
        discount: "50% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Fratini",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "819",
        offPrice: "1399",
        discount: "50% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Infuse",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "699",
        offPrice: "1399",
        discount: "50% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Fratini",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "699",
        offPrice: "1399",
        discount:"50% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Infuse",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "699",
        offPrice: "1399",
        discount: "50% off"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        brand: "Adidas",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "699",
        offPrice: "1399",
        discount:"50% off"
    }

]

function showProduct(data) {
    let box=document.getElementById("box")
    data.forEach(item => {
        let div = document.createElement("div")
        div.setAttribute("class","cardDiv")
        let img = document.createElement("img");
        img.src = item.imgUrl;
        let brand = document.createElement("h3");
        brand.innerText = item.brand;
        let description = document.createElement("p")
        description.innerText = item.description;

        let priceDiv = document.createElement("div")
        priceDiv.setAttribute("class","priceDiv")
        
        let price = document.createElement("h3");
        price.setAttribute("class","price")
        price.innerHTML ="&#x20B9;"+item.price;
        let offPrice = document.createElement("h3");
        offPrice.innerText = item.offPrice
        offPrice.setAttribute("class","offPrice")
        let discount = document.createElement("h3")
        discount.innerText = item.discount
        discount.setAttribute("class","dis")

        div.append(img, brand, description, priceDiv);
        priceDiv.append(price, offPrice, discount)
        box.append(div)
    });
}

showProduct(data)
let count = 0;
let count1 = 0;
let count2 = 0;
function showBrand() {
    let sortbrand = document.getElementById("sortbrand");
    count++
    if (count%2!==0) {
        sortbrand.style.display = "block"
        
    }
    else sortbrand.style.display = "none"
    
}
function showOffer() {
    count1++
    let sortbrand = document.getElementById("sortoffer");
    if (count1%2!==0) {
        sortbrand.style.display = "block"
        
    }
    else sortbrand.style.display = "none"
    
}
function showPrice() {
    count2++
    let sortbrand = document.getElementById("sortprice");
    if (count2%2!==0) {
        sortbrand.style.display = "block"
        
    }
    else sortbrand.style.display = "none"
}

function sortByAdidas(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.brand=="Adidas"
    );
    

    showProduct(result)
}
function sortByLife(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.brand=="Life"
    );
    

    showProduct(result)
}
function sortByInfuse(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.brand=="Infuse"
    );
    

    showProduct(result)
}
function sortByStop(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.brand=="Stop"
    );
    

    showProduct(result)
}
function sortByFratini(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.brand=="Fratini"
    );
    

    showProduct(result)
}

function sortByOff30(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.discount=="30% off"
    );
    

    showProduct(result)
}
function sortByOff50(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.discount=="50% off"
    );
    

    showProduct(result)
}
function sortByOff70(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.discount=="70% off"
    );
    

    showProduct(result)
}

//sort by low to heigh

function lowToHeigh(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.sort((a, b) => a.price - b.price)
    showProduct(result)
    console.log(result)
}

//sort by heigh to low

function heighToLow(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.sort((a, b) => b.price - a.price)
    showProduct(result)
    console.log(result)
}