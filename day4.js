// functions in javascript
// functions are block of code in which we write functionallity and on calling the function it will perform or excute given functionality
// It can take inputs, perform actions, and return outputs.

//how to declare a function in js
// - using function keyword

// --syntax of a function
/* function name(parameters) {
      code to be executed
 }*/
// -parameters (input)

// example function

// let user = "nameet";
// let greeting = `hi! goodevening ${user} `;
// console.log(greeting);

//create a greeting function which will take username and greet the user
function greetuser(user="user",greet) {
 
  let greeting = `hi! ${greet} ${user} `;
  console.log(greeting);
}
// greetuser("dheeraj")
// greetuser("sajid")
// greetuser("anjali")
greetuser()
greetuser("sajid","good afternoon")
greetuser("dheeraj","good evening")
greetuser("good morning","ankita")


function add(num1,num2){
let sum = num1+num2
return sum
console.log("hi after")
console.log(`addition of num1 and num2 is ${sum}`)
}
// console.log(sum)

let result =add(5,5)
console.log(result)

//create a function which will calculate area of squre
function areaOfSqure(s){
let area = s*s
return `sqare of given s ${s} is ${area} sq.cm`
}
console.log(areaOfSqure(10))
console.log(areaOfSqure(5))

function areaOfCircle(){
    let r = prompt("enter radius in number")
    let formula = 22/7*r**2
    return `<h1>area of circle with radius ${r} is ${formula}</h1>`
}

document.writeln(areaOfCircle())