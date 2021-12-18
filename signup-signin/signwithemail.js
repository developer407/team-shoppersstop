 document.getElementById("btn").addEventListener("click", signIn);

var regdUsers = JSON.parse(localStorage.getItem("userData"));
console.log(regdUsers);

// var flag = false;


async function signIn() {
  let url = `https://masai-api-mocker.herokuapp.com/auth/login`

  var email = document.getElementById("email").value;

  var pass = document.getElementById("pass").value;

  let userCredentials = {
    username: email,
    password: pass,

  }

  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
        "Content-Type": "application/json"
    },
    // mode: "no-cors"
});
let data = await res.json();
console.log('data:', data)

if(data.error == true) {
  let message = document.getElementById("message");

  message.innerText = data.message;
  
} else {

  let message = document.getElementById("message");

  message.style.color = "green";


  message.innerText = "Login Successful !";

  setTimeout(function(){
    window.location.href = "../index.html"
  }, 1000);
}

  // for (var i = 0; i < regdUsers.length; i++) {
  //   if (regdUsers[i].emailAddress == email && regdUsers[i].passWord == pass) {
  //     window.location.href = "https://www.shoppersstop.com/";
  //   } else {
  //     flag = true;
  //   }
  // }
  // if(flag) {
  //   document.getElementById("message").innerText = "Wrong Credentials";
  // }
}

