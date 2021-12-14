function adress() {
    let err = document.getElementById("err")
    err.innerText = null;
    let name = document.getElementById("name").value
    let pincode = document.getElementById("pincode").value
    let adress = document.getElementById("adress").value
    let landmark = document.getElementById("landmark").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let mobile = document.getElementById("mobile").value
    let email=document.getElementById("email").value
    
    let data = [name, pincode, adress, landmark, city, state, mobile,email]
    let names=["name","pincode","adress","landmark","city","state","mobile","email"]
    let flag = false;
    let errr=null
    for (let i = 0; i < data.length; i++){
        if (data[i].length == 0) {
            flag = true;
            errr = names[i]
            break;
        }
    }
    if (flag == true) {
        
        err.innerText =`please fill the ${errr}`;

    }
    else {
        window.location.href="payment.html"
    }
    console.log(data)
    
}

let nextBtn = document.getElementById("next")
nextBtn.onclick = function () {
    adress();
    console.log("ashok")
}
