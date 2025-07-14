//what? to retrain the filled data on refresh
//how ? if we can store data in some storage and get that data when page load at first time and insert that data coming from storage .

let name = document.getElementById("fullName");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let message = document.getElementById("message");
let form = document.querySelector("form");
let table = document.getElementById("enquiryTable");
let deleteButtons = "";

function addDetailsToEnquiryTable(e) {
  // console.log(event)

  e.preventDefault();

  let studentDetails = {
    name: name.value,
    email: email.value,
    mobile: mobile.value,
    message: message.value,
    id: Date.now(),
  };
  console.log(studentDetails);

  if (!studentDetails.name && !studentDetails.email && !studentDetails.mobile) {
    return alert("please fill all fields name,email,mobile");
  }

  //store prevData
  let previousData = JSON.parse(localStorage.getItem("studentDataList")) ?? [];

  console.log(previousData, "previous data");

  //store the user data

  //to convert a js object in string we can use "JSON.stingify(object)"
  // to convert a json string into a javascript object we can user JSON.parse(json string)
  previousData.push(studentDetails);
  localStorage.setItem("studentDataList", JSON.stringify(previousData));

  //  /ADDING NEW ROW
  let row = document.createElement("tr"); // <tr></tr>

  //  ------adding col 1------
  let nameCol = document.createElement("td"); //<td></td>
  nameCol.innerText = studentDetails.name; //namecol add text data name // <td>nameet</td>
  row.appendChild(nameCol); // <tr><td>nameet</td></tr>

  //  ------adding col 2------\
  let emailCol = document.createElement("td");
  emailCol.innerText = studentDetails.email; //<td>nameet@gmail.com</td>
  row.appendChild(emailCol); //  <tr><td>nameet</td> <td>nameet@gmail.com</td></tr>

  //  ------adding col 3------\
  let mobileCol = document.createElement("td");
  mobileCol.innerText = studentDetails.mobile;
  row.appendChild(mobileCol);

  // adding --- col 4
  let messageCol = document.createElement("td");
  messageCol.innerText = studentDetails.message;
  row.appendChild(messageCol);

  //ading option col ie col 5
  row.innerHTML += `<td><div id=${studentDetails.id} class="deleteBtn">
    delete
           </td>`;

  table.appendChild(row);

  // let html = `<tr><td>${name.value}</td><td>${email.value}</td><td>${mobile.value}</td><td>${message.value}</td></tr>`
  // table.innerHTML += html

  //reseting form
  name.value = "";
  email.value = "";
  mobile.value = "";
  message.value = "";
}

//adding event listener

form.addEventListener("submit", addDetailsToEnquiryTable);

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

function loadDataFromStorage() {
  let data = JSON.parse(localStorage.getItem("studentDataList")) ?? [];

  data.forEach((item) => {
    let row = document.createElement("tr"); // <tr></tr>

    //  ------adding col 1------
    let nameCol = document.createElement("td"); //<td></td>
    nameCol.innerText = item.name; //namecol add text data name // <td>nameet</td>
    row.appendChild(nameCol); // <tr><td>nameet</td></tr>

    //  ------adding col 2------\
    let emailCol = document.createElement("td");
    emailCol.innerText = item.email; //<td>nameet@gmail.com</td>
    row.appendChild(emailCol); //  <tr><td>nameet</td> <td>nameet@gmail.com</td></tr>

    //  ------adding col 3------\
    let mobileCol = document.createElement("td");
    mobileCol.innerText = item.mobile;
    row.appendChild(mobileCol);

    // adding --- col 4
    let messageCol = document.createElement("td");
    messageCol.innerText = item.message;
    row.appendChild(messageCol);

    //ading option col ie col 5
    row.innerHTML += `<td><div id=${item.id} class="deleteBtn">
    delete
           </td>`;

    table.appendChild(row);
  });

  deleteButtons = document.querySelectorAll(".deleteBtn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteDetails);
  });
}

window.addEventListener("load", loadDataFromStorage);

//storage []
//1st data {name:"abxc",email:"sdfds",number:97987987,messsage:"sdfsdfsd"}

// // prevData = // getItems = > [] //parsed
// prevData.push({
//   name: "abxc",
//   email: "sdfds",
//   number: 97987987,
//   messsage: "sdfsdfsd",
// })[{ name: "abxc", email: "sdfds", number: 97987987, messsage: "sdfsdfsd" }];
// localStorage.setItem("sud", prev);

//get data ---- initially  [] = > JSON.parse(`[]`)

function deleteDetails(e) {
  let detailsListData = JSON.parse(localStorage.getItem("studentDataList"));
  let itemTodelID = e.target.id;
  console.log(itemTodelID);

  let indexNo = detailsListData.findIndex((item) => {
    return item.id == itemTodelID;
  });
  // console.log("index of items is ", indexNo);

  //indexof
  //findIndex

  //delete
  detailsListData.splice(indexNo, 1);

  //reset new value in localstorage
  localStorage.setItem("studentDataList", JSON.stringify(detailsListData));
  loadDataFromStorageAfterDelete();

  console.log(detailsListData);
}

function loadDataFromStorageAfterDelete() {
  table.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("studentDataList")) ?? [];

  data.forEach((item) => {
    let row = document.createElement("tr"); // <tr></tr>

    //  ------adding col 1------
    let nameCol = document.createElement("td"); //<td></td>
    nameCol.innerText = item.name; //namecol add text data name // <td>nameet</td>
    row.appendChild(nameCol); // <tr><td>nameet</td></tr>

    //  ------adding col 2------\
    let emailCol = document.createElement("td");
    emailCol.innerText = item.email; //<td>nameet@gmail.com</td>
    row.appendChild(emailCol); //  <tr><td>nameet</td> <td>nameet@gmail.com</td></tr>

    //  ------adding col 3------\
    let mobileCol = document.createElement("td");
    mobileCol.innerText = item.mobile;
    row.appendChild(mobileCol);

    // adding --- col 4
    let messageCol = document.createElement("td");
    messageCol.innerText = item.message;
    row.appendChild(messageCol);

    //ading option col ie col 5
    row.innerHTML += `<td><div id=${item.id} class="deleteBtn">
    delete
           </td>`;

    table.appendChild(row);
  });

  deleteButtons = document.querySelectorAll(".deleteBtn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteDetails);
  });
}
