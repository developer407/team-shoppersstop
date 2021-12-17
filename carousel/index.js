import caroRunFun from "./scripts/carousel.js"
import images1 from "./caroImages/caroImgColl1.js"
import images2 from "./caroImages/caroImgColl2.js"
import images3 from "./caroImages/caroImgColl3.js"
import widget1 from "./widgetsImages/widgetColl1.js";
import widget2 from "./widgetsImages/widgetColl2.js";
import widget3 from "./widgetsImages/widgetColl3.js";
import loadWidgets from "./scripts/loadWidgets.js"
// carousel1
let location = document.getElementById("carousel-1");
let barsDiv = document.getElementById("carousel-nav-1");
caroRunFun(location, images1, barsDiv);

// banner1
let div1 = document.createElement("div");
div1.setAttribute("class","banner-1");
let img1 = document.createElement("img");
img1.src = "https://sslimages.shoppersstop.com/sys-master/root/h71/h43/26662324961310/PVT-Fest-Strip-Web_20211208.jpg";
div1.appendChild(img1);
location.insertAdjacentElement("afterend",div1);

// carousel2
location = document.getElementById("carousel-2");
barsDiv = document.getElementById("carousel-nav-2");
caroRunFun(location, images2, barsDiv);

// banner2
div1 = document.createElement("div");
div1.setAttribute("class","banner-1");
img1 = document.createElement("img");
img1.src = "https://sslimages.shoppersstop.com/sys-master/root/h44/h42/26644324876318/Outfits-for-those-Big-Fat-Weddings_Strip_web_20211204.jpg";
div1.appendChild(img1);
location.insertAdjacentElement("afterend",div1);

// widget1
let div2 = document.createElement("div");
div2.setAttribute("class","widget-1");
div1.insertAdjacentElement("afterend",div2);
location = div2;
loadWidgets(location,widget1);

// banner3
div1 = document.createElement("div");
div1.setAttribute("class","banner-1");
img1 = document.createElement("img");
img1.src = "https://sslimages.shoppersstop.com/sys-master/root/h94/ha2/26642729926686/From-the-House-of-Shoppers-Stop_Strip_web_20211203.jpg";
div1.appendChild(img1);
location.insertAdjacentElement("afterend",div1);

// carousel3
location = document.getElementById("carousel-3");
barsDiv = document.getElementById("carousel-nav-3");
caroRunFun(location, images3, barsDiv);

// banner4
div1 = document.createElement("div");
div1.setAttribute("class","banner-1");
img1 = document.createElement("img");
img1.src = "https://sslimages.shoppersstop.com/sys-master/root/h1c/h2b/26654704205854/Exclusive-collection_Strip.jpg";
div1.appendChild(img1);
location.insertAdjacentElement("afterend",div1);


// widget2
div2 = document.createElement("div");
div2.setAttribute("class","widget-1");
div1.insertAdjacentElement("afterend",div2);
location = div2;
loadWidgets(location,widget2);

// banner5
div1 = document.createElement("div");
div1.setAttribute("class","banner-1");
img1 = document.createElement("img");
img1.src = "https://sslimages.shoppersstop.com/sys-master/root/h18/hcc/26703433891870/Bargains-on-Top-Brands_strip_web_20211214.jpg";
div1.appendChild(img1);
location.insertAdjacentElement("afterend",div1);

// widget3
div2 = document.createElement("div");
div2.setAttribute("class","widget-2");
div1.insertAdjacentElement("afterend",div2);
location = div2;
loadWidgets(location,widget3);

// banner6
div1 = document.createElement("div");
div1.setAttribute("class","banner-1");
img1 = document.createElement("img");
img1.src = "https://sslimages.shoppersstop.com/sys-master/root/h6f/h08/26703436316702/Exclusive-Brands-Deals-You-can_t-Miss-Strip-Web_20211214.jpg";
div1.appendChild(img1);
location.insertAdjacentElement("afterend",div1);