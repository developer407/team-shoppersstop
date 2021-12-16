
function navbar(){
    return `<!-- header divided into two parts -->
    <header>
      <!-- first box -->
      <div class="inside-box-1">
        <div>
          <span class="material-icons-outlined"> store </span>
          <p>All Stores</p>
        </div>
        <div>
          <span class="material-icons-outlined"> contact_page </span>
          <p>Contact Us</p>
        </div>
        <div class="category-icon">
          <span class="material-icons-outlined"> sort </span>
          <p class="hide">Category</p>
        </div>
      </div>
      <!-- second box -->
      <div class="inside-box-2">
        <!-- second box is further divided into three sub boxes -->
        <!-- first sub-box -->
        <div class="sub-inside-box-1">
          <img
            width="90%"
            class="logo"
            src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/logo.svg"
            alt="This is an image"
          />
        </div>
        <!-- second sub-box -->
        <div class="sub-inside-box-2">
          <div class="search-div">
            <input
              id="search"
              type="text"
              placeholder="Search Products & Brands"
            />
            <!-- // this is the div attached to show the result -->
            <div id="search-result-div"></div>
            <!-- div ends here -->
          </div>
          <div class="search-icon-div">
            <span class="material-icons-outlined sz"> search </span>
          </div>
        </div>
        <!-- third sub-box -->
        <div class="sub-inside-box-3">
          <span class="material-icons-outlined sz"> favorite_border </span>
          <span class="material-icons-outlined sz"> shopping_bag </span>
          <span class="material-icons-outlined sz"> account_circle </span>
        </div>
      </div>
<!-- categories link section -->
    </header>
    <div class = "links-cover">
    <div class="links">
        <ul>
          <li class="linksLi" id="bargains">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/h27/h03/16114670469150/Bubble-2-2021.png"
              alt=""
            />
            <p>Bargans</p>
          </li>
          <li class = "linksLi" id="women">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/ha5/h4e/14994599804958/Women-20200710.jpg"
              alt=""
            />
            <p>woman</p>
          </li>
          <li class = "linksLi" id="kids">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/h25/h67/14994600525854/Kids-r1-20200710.jpg"
              alt=""
            />
            <p>kids</p>
          </li>
          <li class = "linksLi" id="beauty">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/h76/hbe/14994169987102/Beauty_navjuly.gif"
              alt=""
            />
            <p>beauty</p>
          </li>
          <li class = "linksLi" id="men">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/h65/h52/14994599936030/Men-20200710.jpg"
              alt=""
            />
            <p>men</p>
          </li>
          <li class = "linksLi" id="homestop">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/ha3/h6e/14994600787998/Home-20200710.jpg"
              alt=""
            />
            <p>homestop</p>
          </li>
          <li class = "linksLi" id="watches">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/h7f/h45/17444337516574/watch-circle-2021.jpg"
              alt=""
            />
            <p>watches</p>
          </li>
          <li class = "linksLi" id="brands">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/h27/h03/16114670469150/Bubble-2-2021.png"
              alt=""
            />
            <p>brands</p>
          </li>
          <li class = "linksLi" id="gifts">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/he0/h76/14040047058974/Circle-gifts.jpg"
              alt=""
            />
            <p>gifts</p>
          </li>
          <li class = "linksLi" id="luxe">
            <img
              class="list-img"
              src="https://sslimages.shoppersstop.com/sys-master/root/h27/h03/16114670469150/Bubble-2-2021.png"
              alt=""
            />
            <p>luxe</p>
          </li>
        </ul>
      </div>
      </div>
<!-- on hover show this container -->

    <!-- // we will do work here -->
    <div class="on-hover-show-div">
<!-- have made individual boxes to display inside on-hover-show-div -->
      <div class="bargain-div">
        <div class="sub-bargain-div-one">
          <ul>
            <li class="women b1">
              <p>Women</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="men b1">
              <p>Men</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="men b1">
              <p>Kids</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="beauty b1">
              <p>Beauty</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="home-offers b1">
              <p>Home Offers</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="other-offer b1">
              <p>Other Offer</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="all-offer-products b1">
              <p>All Offer Product</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
          </ul>
        </div>
        <div class="sub-bargain-div-two">
          <div class="bargain-discount"></div>
          <div class="bargain-image-one">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg" alt="">
            <p>Shop Now</p>
          </div>
          <div class="bargain-image-two">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg" alt="">
            <p>Shop Now</p>
          </div>
        </div>
      </div>
      <!-- bargain-divs Ends here -->
      <div class="woman-div">
        <div class="sub-bargain-div-one">
          <ul>
            <li class="indian-wear w1">
              <p>Indian wear</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="western-wear w1">
              <p>Western wear</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="lingerie-night-wear w1">
              <p>Lingerie Night Wear</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="footwear w1">
              <p>Footwear</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="Women-fragerance w1">
              <p>Women's Fragerances</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="bags-wallets w1">
              <p>Bags & Wallets</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="watches w1">
              <p>Watches</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="sunglasses-frames w1">
              <p>Sunglasses & Frames</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="jewellery w1">
              <p>jewellery</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="travel w1">
              <p>Travel</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
          </ul>
        </div>
        <div class="sub-bargain-div-two">
          <div class="woman-discount"></div>
          <div class="bargain-image-one">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg" alt="">
            <p>Shop Now</p>
          </div>
        </div>
      </div>
<!-- woman div ends here -->
      <div class="kids-div">
        <div class="sub-bargain-div-one">
          <ul>
            <li class="boys k1">
              <p>Boys</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="girls k1">
              <p>Girls</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="infants k1">
              <p>Infants</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="toys k1">
              <p>Toys</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="school-essential k1">
              <p>School Essential</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="footwear k1">
              <p>Footwear</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="watches k1">
              <p>Watches</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="accessories k1">
              <p>Accessories</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
          </ul>
        </div>
        <div class="sub-bargain-div-two">
          <div class="kids-discount"></div>
          <div class="bargain-image-one">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/hde/hb8/14520526143518/Menu_mothercare-20200225.jpg" alt="">
            <p>Shop Now</p>
          </div>
          <div class="bargain-image-two">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/h0f/h8e/14803313623070/Menu_kidsmask_20190527.jpg" alt="">
            <p>Shop Now</p>
          </div>
        </div>
      </div>
<!-- here kids div  ends -->
      <div class="beauty-div">
        <div class="sub-bargain-div-one">
          <ul>
            <li class="make-up be1">
              <p>Make Up</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="skincare be1">
              <p>Skincare</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="bath-body be1">
              <p>Bath & Body</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="nails be1">
              <p>Nails</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="haircare be1">
              <p>Haircare</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="tools-accessories be1">
              <p>Tools & Accessories</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="Women-fragerance be1">
              <p>Women's Fragerance</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="men-fragerance be1">
              <p>Men's Fragerance</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>

            <li class="grooming-for-men be1">
              <p>Grooming For Men</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            
            <li class="personal-hygiene be1">
              <p>Personal Hygiene</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
          </ul>
        </div>
        <div class="sub-bargain-div-two">
          <div class="beauty-discount"></div>
          <div class="bargain-image-one">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg" alt="">
            <p>Shop Now</p>
          </div>
        </div>
      </div>
<!-- beauty div ends here -->
      <div class="men-div">
        <div class="sub-bargain-div-one">
          <ul>
            <li class="clothing m1">
              <p>Clothing</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="accessories m1">
              <p>Accessories</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="footwear m1">
              <p>Footwear</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="sunglasses-frames m1">
              <p>Sunglasses & Frames</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="watches m1">
              <p>Watches</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="men-fragerance m1">
              <p>Men's Fragerances</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="grooming-for-men m1">
              <p>Grooming For Men</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="jewellery m1">
              <p>Jewellery</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
          </ul>
        </div>
        <div class="sub-bargain-div-two">
          <div class="men-discount"></div>
          <div class="bargain-image-one">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg" alt="">
            <p>Shop Now</p>
          </div>
        </div>
      </div>
<!-- men div's ends here -->
      <div class="watches-div">
        <div class="sub-bargain-div-one">
          <ul>
            <li class="men-watches wa1">
              <p>Mens Watches</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="women-watches wa1">
              <p>Women Watches</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
            <li class="kids-watches wa1">
              <p>Kids Watches</p>
              <span class="material-icons-outlined">
                chevron_right
                </span>
            </li>
          </ul>
        </div>
        <div class="sub-bargain-div-two">
          <div class="watches-discount"></div>
          <div class="bargain-image-one">
            <img width="100%" src="https://sslimages.shoppersstop.com/sys-master/root/h80/he3/17444335419422/Wedding------web-01-20210922.jpg" alt="">
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>`
}

export default navbar