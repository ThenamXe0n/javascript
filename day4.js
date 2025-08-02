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
function greetuser(user = "user", greet) {
  let greeting = `hi! ${greet} ${user} `;
  console.log(greeting);
}
// greetuser("dheeraj")
// greetuser("sajid")
// greetuser("anjali")
greetuser();
greetuser("sajid", "good afternoon");
greetuser("dheeraj", "good evening");
greetuser("good morning", "ankita");

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
  console.log("hi after");
  console.log(`addition of num1 and num2 is ${sum}`);
}
// console.log(sum)

// let result =add(5,5)
// console.log(result)

// //create a function which will calculate area of squre
// function areaOfSqure(s){
// let area = s*s
// return `sqare of given s ${s} is ${area} sq.cm`
// }
// console.log(areaOfSqure(10))
// console.log(areaOfSqure(5))

// function areaOfCircle(){
//     let r = prompt("enter radius in number")
//     let formula = 22/7*r**2
//     return `<h1>area of circle with radius ${r} is ${formula}</h1>`
// }

// document.writeln(areaOfCircle())

// Types of funtions in javascript
// 1 regular function
// 2 function expression(category) = are those function which are stored in a variable
// 3 Anonymous Functions
// 4 arrow functions
//5 IIFE(imidiatly invoke function expression)
()()
(function () {
  console.log("iife");
})();

// console.log(a("khushi"));
let veg3 = "gobhi"
function dinner(veg1, veg2) {
  veg3 = "abcd"
  return `cooked ${veg1} ${veg2} ${veg3} for dinner`;
}
console.log(dinner("aalu","methi")) //impure function
console.log(veg3)


//callback function //
function b(){

}


let a=()=>"hello"


function test(){
  console.log(test)
}

Array.filter(test)

parseInt("1234") + 1


111.7777 ==> 111.7