import navbar from "/scripts/navbarAndFooter.js";
navbarDivArea.innerHTML = navbar();
// scripts\navbarAndFooter.js
// console.log(navbar)



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
  for (let  i = 0; i < slideData.length; i++) {
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
        imgUrl:"https://sslimages.shoppersstop.com/sys-master/images/hc2/h04/17548630392862/S21831RGYPO17IB_INK_BLUE.jpg_230Wx334H",
        img1: "https://sslimages.shoppersstop.com/sys-master/images/h4c/hb7/17548633800734/S21831RGYPO17IB_INK_BLUE_alt1.jpg_1088Wx1632H",
        img2:"https://sslimages.shoppersstop.com/sys-master/images/h30/h0f/17548627312670/S21831RGYPO17IB_INK_BLUE_alt2.jpg_1088Wx1632H",
        brand: "Fratini",
        description: "Stripes Cotton Regular Fit Mens T-Shirt - ink Blue",
        price: "699",
        offPrice: "1399",
        discount: "50% off",
        color:"blue",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h93/hde/17556188102686/AW21IST018_BLACK.jpg_230Wx334H",
        
        brand: "Infuse",
        description: "Solid Cotton Jersey Regular Fit Mens T-Shirt",
        price: "249",
        offPrice: "499",
        discount: "50% off",
        color: "black",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hce/h6d/16208905633822/S21183SLH436N_NAVY.jpg_230Wx334H",
        img1: "https://sslimages.shoppersstop.com/sys-master/images/h1a/h77/16208012312606/S21183SLH436N_NAVY_alt1.jpg_1088Wx1632H",
        img2:"https://sslimages.shoppersstop.com/sys-master/images/hf0/h96/16237773979678/S21183SLH436N_NAVY_alt2.jpg_1088Wx1632H",
        
        
        brand: "Life",
        description: "Printed Cotton Regular Fit Mens T-Shirt",
        price: "299",
        offPrice: "599",
        discount: "50% off",
        color:"blue",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h6d/hb1/16461070270494/S21187STRPO09B_WHITE.jpg_230Wx334H",
        img1: "https://sslimages.shoppersstop.com/sys-master/images/hb3/h8d/16462196801566/S21187STRPO09B_WHITE_alt1.jpg_1088Wx1632H",
        img2:"https://sslimages.shoppersstop.com/sys-master/images/he4/he7/16463643475998/S21187STRPO09B_WHITE_alt2.jpg_1088Wx1632H",
        
        
        brand: "Stop",
        description: "Striped Cotton Blend Regular Fit Mens T-Shirt",
        price: "599",
        offPrice: "799",
        discount: "25% off",
        color: "white",
    },
    {
        img1: "https://sslimages.shoppersstop.com/sys-master/images/heb/hf7/26461347479582/AADI-FT1433-SG_SILVER_GREY_alt1.jpg_1088Wx1632H",
        img2:"https://sslimages.shoppersstop.com/sys-master/images/h15/h53/26460497346590/AADI-FT1433-SG_SILVER_GREY_alt2.jpg_1088Wx1632H",
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h15/h53/26460497346590/AADI-FT1433-SG_SILVER_GREY_alt2.jpg_1088Wx1632H",
        
        brand: "Adidas",
        description: "Solid Polyester Mens T-Shirt",
        price: "1799",
        offPrice: "500",
        discount:"30% off",
        color:"orange"
    },
    // first 5 complete consist - one item
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/ha6/h20/13805188120606/205811815_9324.jpg_230Wx334H",
        img1: "https://sslimages.shoppersstop.com/sys-master/images/h1f/h4d/13808318644254/205811815_9324_alt1.jpg_1088Wx1632H",
        img2:"https://sslimages.shoppersstop.com/sys-master/images/ha8/hd4/13808771039262/205811815_9324_alt2.jpg_1088Wx1632H",
        brand: "Adidas",
        description: "Men Polo",
        price: "849",
        offPrice: "1699",
        discount: "50% off",
        color:"blue",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc5/h14/17184108970014/AMAD-GQ2228-BK_BLACK_alt2.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Adidas",
        description: "Blended Regular Fit Mens Active T-Shirt",
        price: "1199",
        offPrice: "1999",
        discount: "40% off",
        color: "black",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h6b/hb9/17556074364958/AW21IST018_BRICK_RED.jpg_230Wx334H",
        img1: "",
        img2:"",
        brand: "Infuse",
        description: "Solid Cotton Jersey Regular Fit Mens T-Shirt",
        price: "249",
        offPrice: "499",
        discount: "50% off",
        color: "orange",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h44/h7e/17556130136094/AW21IST018_LILAC_alt1.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Infuse",
        description: "Solid Cotton Jersey Regular Fit Mens T-Shirt",
        price: "249",
        offPrice: "499",
        discount: "50% off",
        color: "white",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h9a/hb4/16383081906206/S21183RNP456C_CORAL_alt1.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Life",
        description: "Printed Cotton Regular Fit Mens T-Shirt",
        price: "299",
        offPrice: "599",
        discount:"50% off",
        color:"orange",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h27/he0/17548527140894/S21183RNP456W_WHITE_alt1.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Life",
        description: "Printed Cotton Regular Fit Mens T-Shirt",
        price: "299",
        offPrice: "599",
        discount: "50% off",
        color: "white",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h5a/h58/17562092765214/S21831SUPP9BK_BLACK.jpg_230Wx334H",
        img1: "",
        img2:"",
        brand: "Fratini",
        description: "Solid Cotton Blend Regular Fit Mens T-Shirt",
        price: "649",
        offPrice: "1299",
        discount:"50% off",
        color: "black",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/he7/h19/16234369974302/S21831HONEY1T_TEAL_alt1.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Fratini",
        description: "Solid INHANCE Coton Regular Fit Mens T-Shirt",
        price: "839",
        offPrice: "1199",
        discount:"30% off",
        color:"blue",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h82/h38/16553622568990/S21187GRAFT507B_ORANGE_MELANGE_alt1.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Stop",
        description: "Printed Cotton Stretch Regular Fit Mens T-Shirt",
        price: "299",
        offPrice: "599",
        discount:"50% off",
        color:"orange"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/ha2/h6d/14402444787742/206557573_9324_alt1.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Stop",
        description: "Mens Round Neck Printed T-Shirt",
        price: "374",
        offPrice: "749",
        discount:"50% off",
        color:"blue",
    },
    // another 5 with 2 items each-- 5*2 = 10 + (5 previous) = 15
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h1f/h20/16450066022430/S21187STRPOL02B_DARK_CORAL_alt1.jpg_1088Wx1632H",
        img1: "",
        img2:"",
        brand: "Stop",
        description: "Solid Cotton Blend Men's T-Shirt",
        price: "599",
        offPrice: "799",
        discount:"25% off",
        color: "orange",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hc2/he7/16100331421726/S21187STRPPO10_WHITE_alt1.jpg_1088Wx1632H",
        brand: "Stop",
        description: "Mens Regular Fit Stripes Polo T-Shirt",
        price: "599",
        offPrice: "799",
        discount:"25% off",
        color:"white",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h72/h82/16470195896350/S21831SLUHE29M_MUSTARD_alt1.jpg_1088Wx1632H",
        brand: "Fratini",
        description: "Solid Cotton Regular Fit Mens T-Shirt",
        price: "499",
        offPrice: "999",
        discount:"50% off",
        color:"yellow"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h5d/h7f/16549848612894/S21831JAQPO1MU_SPICY_MUSTARD_alt1.jpg_1088Wx1632H",
        brand: "Fratini",
        description: "Structure Cotton Blend Regular Fit Mens T-Shirt",
        price: "649",
        offPrice: "1299",
        discount:"50% off",
        color: "yellow",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hd2/h0d/16383097569310/S21183ODPOL314M_MUSTARD.jpg_230Wx334H",
        brand: "Life",
        description: "Printed Cotton Blend Regular Fit Mens Polo T-Shirt",
        price: "599",
        offPrice: "1199",
        discount:"50% off",
        color:"yellow",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hdf/h06/16884429848606/S21183AOP454W_OFF_WHITE_alt1.jpg_1088Wx1632H",
        brand: "Life",
        description: "Printed Cotton Regular Fit Mens T-ShirtSolid Cotton Blend Regular Fit Mens T-Shirt",
        price: "349",
        offPrice: "699",
        discount:"50% off",
        color:"white",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hba/h5d/26433743683614/AW21DQCN012_BLACK_alt1.jpg_1088Wx1632H",
        brand: "Infuse",
        description: "Printed Cotton Jersey Regular Fit Mens T-Shirt",
        price: "349",
        offPrice: "699",
        discount:"50% off",
        color:"black",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/hd5/h5c/17318874710046/AW21UNR014_BLACK_alt1.jpg_1088Wx1632H",
        brand: "Infuse",
        description: "Printed Cotton Regular Fit Mens T-Shirt",
        price: "349",
        offPrice: "699",
        discount:"50% off",
        color:"black",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h71/h54/26460366405662/AADI-GK9422-BK_BLACK_alt2.jpg_1088Wx1632H",
        brand: "Adidas",
        description: "Solid Cotton Blend Regular Fit Mens T-Shirt",
        price: "649",
        offPrice: "1299",
        discount:"50% off",
        color:"black"
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h99/heb/26460892594206/AMAD-H14668-BU_BLUE_alt2.jpg_1088Wx1632H",
        brand: "Adidas",
        description: "Printed Cotton Mens T-Shirt",
        price: "800",
        offPrice: "1499",
        discount:"50% off",
        color:"blue",
    },
    {
        imgUrl: "https://sslimages.shoppersstop.com/sys-master/images/h87/h7b/15015794802718/206550222_RED_alt3.jpg_1088Wx1632H",
        brand: "Fcuk",
        description: "FCUK Solid Cotton Slim Fit Mens T-Shirt",
        price: "1399",
        offPrice: "1999",
        discount:"70% off",
        color:"orange",
    }
]
//
function showProduct(data) {
    let box=document.getElementById("box")
    data.forEach(item => {
        let div = document.createElement("div")
        div.setAttribute("class", "cardDiv")
        div.onclick = function () {
            localStorage.setItem("cardItem", JSON.stringify(item))
            window.location.href="cart.html"
        }
        let img = document.createElement("img");
        img.src = item.imgUrl;
        let brand = document.createElement("h3");
        brand.setAttribute("id","brand")
        brand.innerText = item.brand;
        let description = document.createElement("p")
        description.innerText = item.description;

        let priceDiv = document.createElement("div")
        priceDiv.setAttribute("class","priceDiv")
        
        let price = document.createElement("h3");
        price.setAttribute("class","price")
        price.innerHTML ="&#x20B9;"+item.price;
        let offPrice = document.createElement("h3");
        offPrice.innerHTML ="&#x20B9;"+ item.offPrice
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
let count3 = 0;
let count4 = 0;

showBrands.addEventListener("click",showBrand)
showOffers.addEventListener("click",showOffer)
showPrices.addEventListener("click",showPrice)
showColors.addEventListener("click",showColor)
showDeliverys.addEventListener("click",showDelivery)



sortByAdidass.addEventListener("click",function(){
    sortByAdidas(data)
})
sortByStops.addEventListener("click",function(){
    sortByStop(data)
})
sortByLifes.addEventListener("click",function(){
    sortByLife(data)
})
sortByInfuses.addEventListener("click",function(){
    sortByInfuse(data)
})
sortByFratinis.addEventListener("click",function(){
    sortByFratini(data)
})
sortByFratinis.addEventListener("click",function(){
    sortByFratini(data)
})
sortByFratinis.addEventListener("click",function(){
    sortByFratini(data)
})

// sory by colors

oranges.addEventListener("click",function(){
    orange(data)
})
whites.addEventListener("click",function(){
    white(data)
})
blacks.addEventListener("click",function(){
    black(data)
})
yellows.addEventListener("click",function(){
    yellow(data)
})
blues.addEventListener("click",function(){
    blue(data)
})

// oranges.addEventListener("click",orange)
sortByOff30s.addEventListener("click",function(){
    sortByOff30(data)
})
sortByOff50s.addEventListener("click",function(){
    sortByOff50(data)
})
sortByOff70s.addEventListener("click",function(){
    sortByOff70(data)
})

lowToHeighs.addEventListener("click",function(){
    lowToHeigh(data)
})

heighToLows.addEventListener("click",function(){
    heighToLow(data)
})



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

function showDelivery() {
    let sortDelivery = document.getElementById("sortDelivery");
    count3++
    if (count3 % 2 != 0) {
        sortDelivery.style.display="block"
    }
    else sortDelivery.style.display="none"
}
function showColor() {
    let sortColor = document.getElementById("sortColor");
    count4++
    if (count4 % 2 != 0) {
        sortColor.style.display="block"
    }
    else sortColor.style.display="none"
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
        item.discount>="30% off"
    );
    

    showProduct(result)
}
function sortByOff50(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.discount>="50% off"
    );
    

    showProduct(result)
}
function sortByOff70(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.discount>="70% off"
    );
    

    showProduct(result)
}

//sort by low to heigh

function lowToHeigh(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.sort((a, b) => a.price - b.price)
    showProduct(result)
    
}

//sort by heigh to low

function heighToLow(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.sort((a, b) => b.price - a.price)
    showProduct(result)
    
}

//sort by color

function orange(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.color=="orange"
    );
    

    showProduct(result)
}
function white(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.color=="white"
    );
    

    showProduct(result)
}
function black(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.color=="black"
    );
    

    showProduct(result)
}
function blue(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.color=="blue"
    );
    

    showProduct(result)
}
function yellow(data) {
    let box = document.getElementById("box")
    box.innerHTML = null;
    let result = data.filter(item => 
        item.color=="yellow"
    );
    

    showProduct(result)
}


const showLoginPage = ()=>{
    window.open("../signup-signin/signUp.html")
  }
  accountCircle.addEventListener("click",showLoginPage)
