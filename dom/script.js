//dom methods(selection)
let heading1 = document.getElementsByTagName("h1")[0];
let heading2 = document.getElementsByTagName("h1")[1];
let heading4 = document.getElementById("title"); //section by id
let screen = document.getElementById("screen");

let AllButtons = document.getElementsByClassName("btn");
let button1 = AllButtons[0];
let button4 = AllButtons[3];

let colorInput = document.getElementById("colorInput");

//selection by querySelector (css selector)
//selection by querySelectorAll (css selector)

function colorChangeToBlue() {
  screen.style.backgroundColor = "blue";
}
function colorChange() {
    console.log(colorInput.value)
  heading1.style.backgroundColor = colorInput.value;
}

button4.addEventListener("click", colorChangeToBlue);

colorInput.addEventListener("input",colorChange)

console.log(heading1);
