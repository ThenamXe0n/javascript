// callback functions

// callback function are which are passed to an existing function as an argument or as an input // and this call back function is called by that existing function

// existing function

// function myFunc(callback) {
//   callback();
// }


// function callBackFunc(){
//     console.log("Hello, I am a callback function");
// }



// myFunc(callBackFunc)

let arr = [1,2,3,4,5,6]
let names = ["raj","mike","john doe","raja"]

function a(i){
    return i.includes("r")
}

// let foundItem = names.find(a)
let foundItem = names.find(function(item){
    return  item.includes("r")
})

let foundItem = names.find((item)=>{})
console.log(foundItem)