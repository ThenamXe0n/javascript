let name = document.getElementById("fullName");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let message = document.getElementById("message");
let button = document.getElementById("submitBtn");
let form = document.querySelector("form");
let testBtn = document.getElementById("test");

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(name.value, email.value, mobile.value, message.value);
}

function handleTestClick(e) {
  if (e.isTrusted === false) {
    alert("someone is tring to hack");
    return;
  }
  console.log("Test button clicked : ", e);
  if (e.altKey === true) {
    alert("pressed with alt key");
  } else {
    alert("pressed without alt key");
  }
}

testBtn.addEventListener("click", handleTestClick);
form.addEventListener("submit", handleFormSubmit);


// /keybord event
// keypress keyDown keyup 

window.addEventListener('keyup',(event)=>{console.log(event) ;alert(event.key)})