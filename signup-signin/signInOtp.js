
  document.getElementById("btn").addEventListener("click", otpfunction);
  var regdUsers = JSON.parse(localStorage.getItem("userData"));
  
  
  
  let newotp = Math.floor(Math.random()*699999+100000);

  function otpfunction(e) {
    e.preventDefault();

    
    
    var mobile = document.getElementById("mobile").value;
    var otp = document.getElementById("otp").value;
    
    if (mobile.length == 10) {
      
      for (var i = 0; i < regdUsers.length; i++) {
        if(regdUsers[i].mobile == mobile) {
          
          document.querySelector(".otpdiv").style.display = "block";
          document.querySelector("#continue").style.display = "none";
          document.querySelector(".signbtn").style.display = "flex";
          
          alert(newotp);
          document.getElementById("message").style.display = "none";
          
        } else if(regdUsers[i].mobile != mobile || regdUsers[i].mobile == ""){
          document.getElementById("message").textContent =
          "Mobile number does not exists!";
        }
      }

    } else {
      document.getElementById("message").textContent =
        "Enter Correct Mobile Number";
    }
  }

  document.getElementById("btn2").addEventListener("click", validatefunction);

  function validatefunction(e) {
    e.preventDefault();


    var valid = document.getElementById("otp").value;
    if (valid == newotp) {
      
      document.getElementById("message").style.color = "green";
      document.getElementById("message").textContent = "OTP Verified !";

      setTimeout(function(){
        window.location.href = "home.html"
      }, 2000);

    } else {
      document.getElementById("message").textContent = "Invalid OTP";
    }
  }
