import navbar from "/scripts/navbarAndFooter.js";
// navbarDivArea.innerHTML = navbar();
const continueBtn = document.querySelector(".continue-btn");

continueBtn.onclick = ()=>{
    window.location.href = "../index.html"
}
