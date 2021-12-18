import navbar from "/scripts/navbarAndFooter.js";
navbarDivArea.innerHTML = navbar();

let allStoreIcon = document.querySelector(".all-store-icon")
let accountCircle = document.querySelector(".account-circle");

// on scroll bar hided the linksbar
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 20) {
    document.querySelector(".links").style.display = "none";
    document.querySelector(".on-hover-show-div").style.display = "none";
  } else {
    document.querySelector(".links").style.display = "initial";
  }
}

let onHoverDiv = document.querySelector(".on-hover-show-div")
let bargains = document.getElementById("bargains");
let women = document.getElementById("women");
let kids = document.getElementById("kids")
let beauty = document.getElementById("beauty");
let men = document.getElementById("men");
let watches = document.getElementById("watches");
let header = document.querySelector("header");

bargains.addEventListener("mouseover", showBargainDiv);
women.addEventListener("mouseover", showWomenDiv);
kids.addEventListener("mouseover", showKidsDiv);
beauty.addEventListener("mouseover", showBeautyDiv);
men.addEventListener("mouseover", showMenDiv);
watches.addEventListener("mouseover", showWatchesDiv);
onHoverDiv.addEventListener("mouseleave", hideDivAgain);
header.addEventListener("mouseover", hideDivAgain)




let bargainDiv = document.querySelector(".bargain-div");
let womenDiv = document.querySelector(".woman-div");
let kidsDiv = document.querySelector(".kids-div");
let beautyDiv = document.querySelector(".beauty-div");
let menDiv = document.querySelector(".men-div");
let watchesDiv = document.querySelector(".watches-div")

function showBargainDiv() {
  onHoverDiv.style.display = "block";
  bargainDiv.style.display = "flex";
  womenDiv.style.display = "none";
  kidsDiv.style.display = "none";
  beautyDiv.style.display = "none";
  menDiv.style.display = 'none';
  watchesDiv.style.display = "none";

}

function showWomenDiv() {
  onHoverDiv.style.display = "block";
  bargainDiv.style.display = "none";
  womenDiv.style.display = "flex";
  kidsDiv.style.display = "none";
  beautyDiv.style.display = "none";
  menDiv.style.display = 'none';
  watchesDiv.style.display = "none";
}

function showKidsDiv() {
  onHoverDiv.style.display = "block";
  bargainDiv.style.display = "none";
  womenDiv.style.display = "none";
  kidsDiv.style.display = "flex";
  beautyDiv.style.display = "none";
  menDiv.style.display = 'none';
  watchesDiv.style.display = "none";
}

function showBeautyDiv() {
  onHoverDiv.style.display = "block";
  bargainDiv.style.display = "none";
  womenDiv.style.display = "none";
  kidsDiv.style.display = "none";
  beautyDiv.style.display = "flex";
  menDiv.style.display = 'none';
  watchesDiv.style.display = "none";
}

function showMenDiv() {
  onHoverDiv.style.display = "block";
  bargainDiv.style.display = "none";
  womenDiv.style.display = "none";
  kidsDiv.style.display = "none";
  beautyDiv.style.display = "none";
  menDiv.style.display = 'flex';
  watchesDiv.style.display = "none";
}

function showWatchesDiv() {
  onHoverDiv.style.display = "block";
  bargainDiv.style.display = "none";
  womenDiv.style.display = "none";
  kidsDiv.style.display = "none";
  beautyDiv.style.display = "none";
  menDiv.style.display = 'none';
  watchesDiv.style.display = "flex";
}

function hideDivAgain() {
  onHoverDiv.style.display = "none"
}

let b1 = document.querySelectorAll(".b1");
let w1 = document.querySelectorAll(".w1");
let k1 = document.querySelectorAll(".k1");
let be1 = document.querySelectorAll(".be1");
let m1 = document.querySelectorAll(".m1");
let wa1 = document.querySelectorAll(".wa1")


let b1Arr = [{
    b1Details: `<p class="hello">Westernwear - upto 70% off</p> <p>Women Ethnicwear Upto upto 70% off</p>
    <p>Shoes - upto 80% off</p>
    <p>Dresses - upto 70% off</p>
    <p>Women's Handbags-flat 40% off</p>
    <p>Westernwear - upto 70% off</p> 
    `
  },
  {
    b1Details: `<p>T-shirt - upto 50% off</p> <p>Shirts - Upto 70% off</p>
    <p>Jeans - upto 60% off</p>
    <p>Shoes - upto 70% off</p>
    <p>Men's Footwear - Min 55% off</p>`
  },
  {
    b1Details: `<p>Dresses & jumpsuits</p>
     <p>Kids Ethnicwear - upto 30% off</p>
    <p>Boys Bottomwear - upto 50% off</p>
    <p>Toys - upto 30% off</p>`
  },
  {
    b1Details: `<p>make up - upto 50% off</p> <p>Skincare - Upto 40% off</p>
    <p>Womens Fragrances - upto 40% off</p>
    <p>Men Fragrances - upto 50% off</p>`
  },
  {
    b1Details: `<p>Appliances - upto 25% off</p> <p>Bath - Upto 50% off</p>
    <p>Bed - upto 50% off</p>
    <p>Living - upto 60% off</p>
    <p>Home Adornment - Upto 80% off</p>
    <p>Kitchen - Upto 70% off</p>
    <p>storage - Upto 60% off</p>`
  },
  {
    b1Details: `<p>Puma - upto 25% off</p>
     <p>Travel & Essentail - Upto 50% off</p>
    <p>Skagen - upto 50% off</p>
    <p>Fastrack- upto 40% off</p>
    <p>Gio Sunglasses - Upto 60% off</p>`
  },
  {
    b1Details: `<p>See All Offer Products</p>`
  }
]

let w1Arr = [{
    w1Details: `<p class = "all-indian-war">All Indian War</p>
  <p class = "kurtas-kurtis-tops">Kurtas, kurtis & tops</p>
  <p>Kurtas</p>
  <p>Kurtis & Tops</p>
  <p class = "bottom-wear">Bottom Wear</p>
  <p>All Bottom Wear</p>
  <p>Leggings & Churidas</p>
  <p>Palazzo & Salwars</p>
  <p>Pants</p>
  <p>Skirts</p>
  <p class = "indianwear-sets">Indianwear Sets</p>
  <p class = "indianwear-dresses">Indianwear Dresses</p>
  `
  },

  {
    w1Details: `<p class = "all-western-wear">All Western Wear</p>
    <p class = "top-wear">Top Wear</p>
    <p>All Top Wear</p>
    <p>shirts</p>
    <p>T-shirts</p>
    <p class = "dresses-jumpsuits">Dresses & Jumpsuits</p>
    <p>All Dresses & Jumpsuits</p>
    <p>Dresses</p>
    <p>Jumpsuits</p>
    <p class = "jeans-jeggings">Jeans & Jeggings</p>
    <p>All Jeans & Jeggings</p>
    <p>Jeans & jeggings</p>
    <p>Leggings</p>
    `
  },

  {
    w1Details: `<p class = "all-lingerie-night-wear">All Lingerie & Night wear</p>
    <p class = "bras">Bras</p>
    <p class = "brief">Briefs</p>
    <p class = "lingerie-sets">lingerie sets</p>
    <p class = "shapewear">Shapewear</p>
    <p>Bodysuit</p>
    <p>All Shapewear</p>
    <p>Saree Shapewear</p>
    <p>Thighs</p>
    <p>Tummy</p>
    <p class = swimwear>Swimwear</p>
    `
  },

  {
    w1Details: `<p>All Footwear</p>
    <p>Floaters & Flip Flops</p>
    <p>Casual Shoes</p>
    <p>Flats</p>
    <p>Heels</p>
    <p>Ballerinas</p>
    <p>Sports Shoes & Sneakers</p>
    <p>Boots</p>
    `
  },

  {
    w1Details: `<p>All Women's Fragrance</p>
    <p>Perfumes</p>
    <p>Mist & Deodrants</p>
    `
  },

  {
    w1Details: `<p class = "all-bags-wallets">All Bags & Wallets</p>
    <p class = "backpacks">Backpacks</p>
    <p class = "handbags">Handbags</p>
    <p>All Handbags</p>
    <p>Hobo</p>
    <p>Tote</p>
    <p>Satchel</p>
    <p>Laptop Bag</p>
    <p>Slings</p>
    <p class = "wallets-clutches">Wallets & Clutches</p>
    `
  },

  {
    w1Details: `<p>All Watches</p>
    <p>Smartwatch & Fitness</p>
    <p>Hybrid</p>
    <p>Analog</p>
    <p>Analog Digital</p>
    <p>Digital</p>
    `
  },

  {
    w1Details: `<p class = "all-sunglasses-frames">All Sunglasses & Frames</p>
    <p class = "shop-by-shape">Shop by shape</p>
    <p>Aviators</p>
    <p>Cat Eye</p>
    <p>Oval</p>
    <p>Tote</p>
    <p>Wayfarers</p>
    <p>Rectangle</p>
    <p class = "frames-contact-lenses">Frames & Contact Lenses</p>
    `

  },

  {
    w1Details: `<p class = "fashion-semi-precious">Fashion & Semi Precious Jewellary</p>
    <p>All Jewellary</p>
    <p>Chain & Necklace</p>
    <p>Ear Rings</p>
    <p>Bracelet & Bangle</p>
    <p>Ring</p>
    <p>Others</p>
    <p>Pendant</p>
    <p class = "fashion-accessories">Fashion Accessories</p>
    `

  },

  {
    w1Details: `<p>All Travel & Luggage</p>
    <p>Hard Luggage</p>
    <p>Soft Luggage</p>
    <p>Essentials </p>
    `

  }

]

let k1Arr = [{
    k1Details: `<P class = "all-boys">All Boys</P>
    <p class = "top-wear">Topwear</p>
    <p>Shirts</p>
    <p>T-Shirts</p>
    <p class = "bottom-wear">Bottomwear</p>
    <p>Jeans</p>
    <p>Trouser</p>
    <p>Short & Dungarees</p>
    <p>Track Pants</p>
    <p class = "innerwear-nightwear">Innerwear & Nightwear</p>
    <p>Brief</p>
    <p>Vest</p>
    <p class = "winterwear">Winterwear</p>
    `
  },

  {
    k1Details: `<P class = "all-girls">All Girls</P>
    <p class = "top-wear">Topwear</p>
    <p>Top</p>
    <p>T-Shirts</p>
    <p>Jackets & Shrugs</p>
    <p class = "bottom-wear">Bottomwear</p>
    <p>Jeans & Jeggings</p>
    <p>Trousers</p>
    <p>Shorts</p>
    <p>Skirts</p>
    <p>Leggings</p>
    <p>Trackpants</p>
    <p class = "dresses">Dresses</p>
    `

  },

  {
    k1Details: `<P>All Infants</P>
    <p>Topwear</p>
    <p>Bottomwear</p>
    <p>Dresses & Jumpsuits</p>
    <p>Sleeps &   Rompers</p>
    <p>Innerwear & Nightwear</p>
    <p>Winterwear</p>
    <p>Indianwear</p>
    <p>Combo sets</p>
    <p>Feeding Time</p>
    <p>Bathing & Changing</p>
    <p>Bedtime</p>
    `

  },

  {
    k1Details: `<P>All Toys  </P>
    <p>Infant Toys</p>
    <p>Dolls & Doll House</p>
    <p>Vehicles ,Tracksets & Remote Toys</p>
    <p>Action Figure & Gadgets</p>
    <p>Soft Toys</p>
    <p>Art & Creativity</p>
    <p>Sports & Outdoor Activites</p>
    <p>Musical Instruments</p>
    <p>Board Games & Puzzles</p>
    <p>Educational Games</p>
    <p>Ride ons</p>
    <p>Role & Pretend Play</p>
    `

  },

  {
    k1Details: `<P class = "all-school-essentials">All School Essentials</P>
    <p class = "bags">Bags</p>
    <p class = "school-accessories">School accessories</p>
    <p class = "shop-by-brands">Shop By Brands</p>
    <p>Hamleys</p>
    <p>Disney</p>
    `
  },

  {
    k1Details: `<P class = "boys-footwear">Boys Footwear</P>
    <p>All Footwear</p>
    <p>Shoes</p>
    <p>Clogs & Sandals</p>
    <p class = "girls-footwear">Girls Footwear</p>
    <p>All Footwear</p>
    <p>Shoes</p>
    <p>Clogs & Sandals</p>
    `
  },

  {
    k1Details: `<P>All Watches</P>
    <p>Girls</p>
    <p>Boys</p>
    `
  },

  {
    k1Details: `<P>Sunglasses</P>
    `
  }
]


let be1Arr = [{
    be1Details: `<p class = "all-make-up">All Make Up</p>
    <p class = "face">Face</p>
    <p>All Face</p>
    <p>BB & CC Cream</p>
    <p>Blush</p>
    <p>Bronzer</p>
    <p>Compact</p>
    <p>Concealer</p>
    <p>Foundations</p>
    <p>Make Up Remover</p>
    <p>Primer</p>
    <p>Kits</p>
    `
  },

  {
    be1Details: `<p>All Skincare</p>
    <p>Creams & Moisturisers</p>
    <p>Cleanser & Toners</p>
    <p>Serums & Essence</p>
    <p>Treatments</p>
    <p>Scrubs</p>
    <p>Mask</p>
    <p>Eye Care</p>
    <p>Lip Care</p>
    <p>Sun Care</p>
    <p>Sanitizers & Wipers</p>
    `

  },

  {
    be1Details: `<p>All Bath & Body</p>
    <p>Shower Gel & Creams</p>
    <p>Body Scrubs</p>
    <p>Body Lotions</p>
    <p>Essential Oils</p>
    <p>Soaps</p>
    <p>Hand & Foot care</p>
    `
  },

  {
    be1Details: `<p>All Nails</p>
    <p>Nail Polish</p>
    <p>Nail Care & Others</p>
    `
  },

  {
    be1Details: `<p>All Haircare</p>
    <p>Shampos & Conditioners</p>
    <p>Styling Products</p>
    <p>Hair Colors</p>
    <p>Hair Oils & Serums</p>
    `
  },

  {
    be1Details: `<p>All Tools & Accessories</p>
    <p>Makeup Tools</p>
    <p>Combs & Brushes</p>
    <p>Styling Appliances</p>
    <p>Accessories</p>
    `
  },

  {
    be1Details: `<p>All Women's Fragrance</p>
    <p>Perfumes</p>
    <p>Mist & Deodrants</p>
    `
  },

  {
    be1Details: `<p>All Men's Fragrance</p>
    <p>Perfume</p>
    <p>Mist & Deodrants</p>
    <p>Gift Sets</p>
    `
  },

  {
    be1Details: `<p>All Grooming</p>
    <p>Skincare</p>
    <p>Shaving & Kits</p>
    <p>Bath & Body</p>
    <p>Haircare</p>
    `
  },

  {
    be1Details: `<p>Sanitary Napkins</p>
    `

  }
]


let m1Arr = [

  {
    m1Details: `<p class = "all-clothing">All Clothing</p>
  <p class = "t-shirts-polos">T-Shirts & Polos</p>
  <p class = "shirts">Shirts </p>
  <p>All Shirts</p>
  <p>Casual</p>
  <p>Formal</p>
  <p class = "jeans">Jeans</p>
  <p class = "trousers">Trousers</p>
  <p>All Trousers</p>
  <p>Casual</p>
  <p>Formal</p>
  <p class = "shorts">Shorts</p>
  <p class = "sports-activewear">Sports & Activewear</p>
  <p>All Sports & Activewear</p>
  <p>T-Shirts</p>
  <p>Joggers & Track Pants</p>
  `
  },

  {
    m1Details: `<p class = "mask">Mask</p>
  <p class = "personal-protection">Personal Protection Equipment</p>
  <p class = "wallet-card-holder">Wallet & Card Holders</p>
  <p class = "belts">Belts</p>
  <p class = "pens-combos">Pens & Combos</p>
  <p class = "travel-luggage">Travel & Luggage</p>
  <p>All Travel & Luggage</p>
  <p>Backpacks</p>
  <p>Soft Luggage</p>
  <p>Essentials</p>
  <p>Hard Luggage</p>
  <p>Laptop Bag</p>
  <p class = "mobile-tablet">Mobile & Tablet Accessories</p>
  `
  },

  {
    m1Details: `<p>All Footwear</p>
  <p>Formal Shoes</p>
  <p>Casual Shoes</p>
  <p>Sandals & Floaters</p>
  <p>Sports Shoes & Sneakers</p>
  <p>Flip Flops</p>
  <p>Boots</p>
  `
  },

  {
    m1Details: `<p class = "all-sunglasses-frames">All Sunglasses & Frames</p>
  <p class = "shop-by-shape">Shop by Shape</p>
  <p>Aviator</p>
  <p>Wayfarers</p>
  <p>Sporty</p>
  <p>Frames & Contact Lenses</p>
  <p class = "frames-contact-lenses">Frames & Contact Lenses</p>
  <p class = "rectangle">Rectangle</p>
  `
  },

  {
    m1Details: `<p>All Watches</p>
  <p>Smartwatch & Fitness Bands</p>
  <p>Aviator</p>
  <p>Analog</p>
  <p>Analog Digital</p>
  <p>Digital</p>
  <p>Chronograph</p>
  `
  },

  {
    m1Details: `<p>All Men's Fragrances</p>
  <p>Perfumes</p>
  <p>Mist & Deodrants</p>
  <p>Gift Sets</p>
  `
  },

  {
    m1Details: `<p>All Grooming</p>
  <p>Skincare</p>
  <p>Shaving & Kits</p>
  <p>Bath & Body</p>
  <p>Haricare</p>
  `
  },

  {
    m1Details: `<p>All Jewellary</p>
  `
  }
]

let wa1Arr = [{
    wa1Details: `<P>All Watches</P>
    <P>Smartwatch & Fitness Bands</P>
    <P>Hybrid</P>
    <P>Analog</P>
    <P>Analog Digital</P>
    <P>Digital</P>
    <P>Chronograph</P>
    `
  },

  {
    wa1Details: `<P>All Watches</P>
    <P>Smartwatch & Fitness Bands</P>
    <P>Hybrid</P>
    <P>Analog</P>
    <P>Analog Digital</P>
    <P>Digital</P>
    <P>Chronograph</P>
    <p>Digital</p>
    `
  },

  {
    wa1Details: `<P>All Watches</P>
    <p>Boys</p>
    <p>Girls</p>
    `
  }

]

let bargainDiscountDiv = document.querySelector(".bargain-discount");
let womanDiscountDiv = document.querySelector(".woman-discount");
let kidsDiscountDiv = document.querySelector(".kids-discount");
let beautyDiscountDiv = document.querySelector(".beauty-discount");
let menDiscountDiv = document.querySelector(".men-discount");
let watchesDiscountDiv = document.querySelector(".watches-discount");

bargainDiscountDiv.innerHTML = b1Arr[0].b1Details;
womanDiscountDiv.innerHTML = w1Arr[0].w1Details;
kidsDiscountDiv.innerHTML = k1Arr[0].k1Details;
beautyDiscountDiv.innerHTML = be1Arr[0].be1Details;
menDiscountDiv.innerHTML = m1Arr[0].m1Details;
watchesDiscountDiv.innerHTML = wa1Arr[0].wa1Details;

for (let i = 0; i < b1.length; i++) {
  b1[i].addEventListener("mouseover", function () {
    b1Index(b1[i], i)

  })
}

for (let i = 0; i < w1.length; i++) {
  w1[i].addEventListener("mouseover", function () {
    w1Index(w1[i], i)
  })
}

for (let i = 0; i < k1.length; i++) {
  k1[i].addEventListener("mouseover", function () {
    k1Index(k1[i], i)
  })
}

for (let i = 0; i < be1.length; i++) {
  be1[i].addEventListener("mouseover", function () {
    be1Index(be1[i], i)
  })
}

for (let i = 0; i < m1.length; i++) {
  m1[i].addEventListener("mouseover", function () {
    m1Index(m1[i], i)
    let tShirtPolos = document.querySelector(".t-shirts-polos");
    tShirtPolos.addEventListener("click", showProductPage);
  })
}

function showProductPage() {
  window.location.href = "/product page/product.html";
}


for (let i = 0; i < wa1.length; i++) {
  wa1[i].addEventListener("mouseover", function () {
    wa1Index(wa1[i], i)
  })
}


function b1Index(ele, i) {
  bargainDiscountDiv.innerHTML = b1Arr[i].b1Details;
}

function w1Index(ele, i) {
  womanDiscountDiv.innerHTML = w1Arr[i].w1Details;
}

function k1Index(ele, i) {
  kidsDiscountDiv.innerHTML = k1Arr[i].k1Details;
}

function be1Index(ele, i) {
  beautyDiscountDiv.innerHTML = be1Arr[i].be1Details;
}

function m1Index(ele, i) {
  menDiscountDiv.innerHTML = m1Arr[i].m1Details;
}

function wa1Index(ele, i) {
  watchesDiscountDiv.innerHTML = wa1Arr[i].wa1Details
}

allStoreIcon.addEventListener("click", showAllStorePage)

function showAllStorePage() {
  window.open("../allstore/allstore.html")
}


men.addEventListener("click", showProductPage)
const all_clothing = document.querySelector(".all-clothing");
all_clothing.onclick = () => {
  showProductPage()
}
const t_shirt_polos = document.querySelector(".t-shirts-polos");
t_shirt_polos.onclick = () => {
  showProductPage()
}

const showLoginPage = () => {
  console.log("here");
  window.open("../signup-signin/signUp.html")
}

console.log(accountCircle)
accountCircle.addEventListener("click", showLoginPage)

const logo_div = document.querySelector(".sub-inside-box-1");
logo_div.onclick = () => {
  window.location.href = "../index.html"
}