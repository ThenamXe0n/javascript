//to create an element we have dom method createElement

let heading = document.createElement("h1");
heading.innerText = "i am heading";
console.log(heading);
let body = document.getElementById("screen");

//  body.appendChild()

// body.innerHTML += '<p>this is a paragraph</p>'
// body.innerHTML += '<ul><li>item1</li><li>item2</li></ul>'

let para = document.createElement("p");
let list = document.createElement("ul");

function addContent() {
  list.innerHTML = "<li>item1</li><li>item2</li>";
  para.innerText = "this is a para";

  //inserting the list and para in body
  body.appendChild(para);
  body.appendChild(list);
  button.style.display ="none"
}





///add button in html page 
// 2 attach a event lister to button ()

let button = document.createElement('button')
button.innerText = "Load content"
body.appendChild(button)

button.addEventListener('click',addContent)