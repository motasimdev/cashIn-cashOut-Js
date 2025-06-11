let mobileNumber = document.getElementById("mobileNumber");
let mobilePin = document.getElementById("mobilePin");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {


  let nmbrValue = mobileNumber.value;
  let pinValue = mobilePin.value;

  mobileNumber.value = ""
  mobilePin.value = ""
  

  if (nmbrValue == "01625419860" && pinValue == 2222) {
    window.location.href = "./home.html";
    console.log("kire kire");
    
  } else {
    alert("oi kireee.. vul hoise");
  }
});
