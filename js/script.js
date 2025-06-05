let mobileNumber = document.getElementById("mobileNumber")
let mobilePin = document.getElementById("mobilePin")
let loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click", ()=>{
    
    let NmbrValue = mobileNumber.value 
    let PinValue = mobilePin.value 
    if (NmbrValue == "01625419860" && PinValue == 2222) {
        window.location.href="./home.html"
        
    }
    else{
        alert("oi kireee.. vul hoise")
    }
    
})