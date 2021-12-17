function payment() {
    let success = document.getElementById("success")
    success.innerText = null;

    let name = document.getElementById("name").value
    let card=document.getElementById("card").value
    let cvv=document.getElementById("cvv").value
    let expirymm=document.getElementById("expirymm").value
    let expiryyy = document.getElementById("expiryyy").value 
    
    let data = [name, card, cvv, expirymm, expiryyy]
    let errr=["name","card number","cvv number","expiry date","expiry date"]

    let flag = false;
    let err = null;
    for (let i = 0; i < data.length; i++){
        if (data[i].length == 0) {
            flag = true;
            err = errr[i]
            break;
        }
    }
    if (flag == true) {
        success.innerText = `pleas fill the ${err}`
        success.style.color="red"
    }
    else {
        success.innerText = `your order is success`
        success.style.color="green"
    }

    console.log(data)
}
let cardBtn = document.getElementById("cardBtn")
    cardBtn.onclick = function () {
    payment();
}