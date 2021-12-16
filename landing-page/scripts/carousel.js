const caroRunFun = (location, imgs, barsDiv) => {
    let caroPosi = `
       <div class="carousel-track-container">
           <ul class="carousel-track">
           </ul>
       </div>
       `
    console.log(location.children)       
    location.insertAdjacentHTML("afterbegin", caroPosi)
    
    // carousel start
    const carouselImges = imgs;

    let caroLen = carouselImges.length;
    let left = 0;
    let right = caroLen - 1;

    // To load the carousel start
    const track = location.children[0].children[0];

    carouselImges.map(function (item) {
        let li = document.createElement("li");
        li.setAttribute("class", "carousel-slide")
        let img = document.createElement("img");
        img.src = item;
        li.append(img);
        track.append(li)
    })
    const firstCarousel = track.children[0];
    firstCarousel.classList.add("current-slide")
    // To load the carousel end

    // To load carousel indicators start
    const indicatorNav = barsDiv
    carouselImges.map(function () {
        let btn = document.createElement("button")
        btn.setAttribute("class", "carousel-indicator")
        barsDiv.append(btn)
    })
    const firstIndicator = indicatorNav.children[0];
    firstIndicator.classList.add("current-slide")
    // To load carousel indicators end 

    // To make carousel transitions start
    const slides = Array.from(track.children)
    const barsNav = barsDiv;
    const bars = Array.from(barsNav.children);
    const slideWidth = slides[0].clientWidth;

    // To add offset to carousel images position start
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + "px";
    }
    slides.forEach(setSlidePosition)
    // To add offset to carousel images position end

    const moveToSlide = (track, currentSlide, targetSlide) => {
        const nextSlide = targetSlide
        track.style.transition = "transform 250ms ease-in"
        track.style.transform = `translateX(-${nextSlide.style.left})`
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    }
    // To make carousel transitions end

    // To make carousel indicator  transitions start
    const moveIndicator = (e) => {
        const targetBar = e.target;

        const currentSlide = track.querySelector(".current-slide")
        const currentBar = barsNav.querySelector(".current-slide")
        const targetIndex = bars.findIndex(bar => bar === targetBar);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide)
        currentBar.classList.remove("current-slide")
        targetBar.classList.add("current-slide")
    }
    bars.map((item) => item.addEventListener("click", function (e) {
        clearInterval(id);
        moveIndicator(e)
    }))
    // To make carousel indicator  transitions end

    // To autoplay carousel start
    let id = setInterval(function () {
        autoPlay()
    }, 3000)

    const autoPlay = () => {
        let currentBar = barsNav.querySelector(".current-slide")
        if (left < caroLen - 1) {
            left++
            let targetBar = currentBar.nextElementSibling;
            let currentSlide = track.querySelector(".current-slide")
            let targetSlide = currentSlide.nextElementSibling;

            moveToSlide(track, currentSlide, targetSlide)
            currentBar.classList.remove("current-slide")
            targetBar.classList.add("current-slide")
        } else {
            right--
            let currentSlide = track.querySelector(".current-slide");
            let targetSlide = track.children[right];
            moveToSlide(track, currentSlide, targetSlide);

            let targetBar = barsNav.children[right];
            currentBar.classList.remove("current-slide");
            targetBar.classList.add("current-slide");
            if (right == 0) {
                left = 0;
                right = caroLen - 1;
            }
        }
    }
    // To autoplay carousel end

    // carousel end
}

export default caroRunFun;