
let greet = () => {
  console.log("Hello good evening");
};

let warning = () => {
  setTimeout(() => {
    console.log("Warning: Product not delivered due to havy rain fall ");
  }, 0);
};

fetch("https://www.dummyjson.com/quotes")
console.log("i am a")
warning()
greet()

console.log("hi i am B")

// result 
// i am a
//Warning: Product not delivered due to havy rain fall 
// Hello good evening
// resolve("Product delivered");
// "hi i am B



function b(){
    console.log("b")
}
function a(){
    b()
    console.log("A");
}

a()