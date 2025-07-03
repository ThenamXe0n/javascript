let name = document.getElementById("fullName");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let message = document.getElementById("message");
let form = document.querySelector("form");
let table = document.getElementById("enquiryTable");

function addDetailsToEnquiryTable(e) {
  // console.log(event)

  e.preventDefault()
  
  let studentDetails = {
    name: name.value,
    email: email.value,
    mobile: mobile.value,
    message: message.value,
  };
 console.log(studentDetails)

 table.innerHTML+=studentDetails

 localStorage.setItem("studentList",JSON.stringify(studentDetails))



 ///ADDING NEW ROW 
//  let row = document.createElement('tr')

// //  ------adding col 1------
//  let nameCol = document.createElement('td')
//  nameCol.innerText=studentDetails.name
//  row.appendChild(nameCol)

//  //  ------adding col 2------\
//  let emailCol = document.createElement('td')
//  emailCol.innerText = studentDetails.email
//  row.appendChild(emailCol)


//  //  ------adding col 3------\
//  let mobileCol = document.createElement('td')
//  mobileCol.innerText = studentDetails.mobile
//  row.appendChild(mobileCol)


//  let messageCol =document.createElement("td")
//  messageCol.innerText = studentDetails.message
//  row.appendChild(messageCol)

//  table.appendChild(row)


let html = `<tr><td>${name.value}</td><td>${email.value}</td><td>${mobile.value}</td><td>${message.value}</td></tr>`
table.innerHTML += html


 //reseting form 
 name.value = "";
 email.value = "";
 mobile.value = "";
 message.value = "";



}


//adding event listener

form.addEventListener('submit',addDetailsToEnquiryTable)

// function handleFormSubmit(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(name.value, email.value, mobile.value, message.value);
// }

// function handleTestClick(e) {
//   if (e.isTrusted === false) {
//     alert("someone is tring to hack");
//     return;
//   }
//   console.log("Test button clicked : ", e);
//   if (e.altKey === true) {
//     alert("pressed with alt key");
//   } else {
//     alert("pressed without alt key");
//   }
// }

// testBtn.addEventListener("click",(xyz)=>{console.log("clicked");console.log("you clicked on : ",xyz.target.innerText)});
// form.addEventListener("submit", handleFormSubmit);

// // /keybord event
// // keypress keyDown keyup

// // window.addEventListener('keyup',(event)=>{console.log(event) ;alert(event.key)})

let body = document.querySelector("body");
let count = 0;
let pointer = document.getElementById("pointer");
body.style.cursor = "none";

// body.addEventListener("mousemove", (e) => {
//   pointer.style.position = "fixed";
//   pointer.style.top = e.clientY + "px";
//   pointer.style.left = e.clientX + "px";
//   pointer.style.transform = '-translateX(50%)'
//   pointer.style.transform = '-translateY(50%)'
//   pointer.style.pointerEvents =
//   console.log("moved")

//   body.appendChild(pointer)
//   // count = count + 1;
//   // console.log("times run :",count);
// });
