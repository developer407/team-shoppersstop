document.getElementById("btn").addEventListener("click", signUp);

  var userArr = JSON.parse(localStorage.getItem("userData")) || [];

 async function signUp() {
   let url = `https://masai-api-mocker.herokuapp.com/auth/register`

    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var user = document.getElementById("user").value;
    var mobile = document.getElementById("mobile").value;

    let userCredentials = {
      email: email,
      password: pass, 
      name: user,
      mobile: mobile,
      description: "A Transformation in education!",
      username:user,
    };

  //   let sign_up = {
  //     name: "MASAI School0",
  //     email: "hello@masai.com0",
  //     password: "secret0",
  //     username: "masai-school0",
  //     mobile: "9876543211",
  //     description: "A Transformation in education!"
  // }


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

    userArr.push(userCredentials);
    localStorage.setItem("userData", JSON.stringify(userArr));

    let message = document.getElementById("message");
    
    message.style.color = "green";
    message.innerText = data.message;

    setTimeout(function(){
      window.location.href = "signwithemail.html"
    }, 2000);
  }
  
  


    // if (email != "" && pass != "" && user != "" && mobile != "") {
    //   userArr.push(userCredentials);
    //   localStorage.setItem("userData", JSON.stringify(userArr));
    // }

    //   alert("Signup Success!");

    //   window.location.href = "signwithemail.html";
    // } else {
    //   alert("Please fill all the required field");
    // }
  }