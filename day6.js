//number methods in js
// toString()
// parseInt()

let num = 89;

//toExponential()
console.log(
  `the exponential notation of number : ${num} is ${num.toExponential()}`
);

//toFixed()
console.log(`the fixed notation of number : ${num} is ${num.toFixed(6)}`);
console.log(
  `the precised  notation of number : ${num} is ${num.toPrecision(6)}`
);
console.log(`the value  of number : ${num} is ${num.valueOf()}`);

////// non primitive data types
// 1 Array
// 2 object

let arr = ["item1", "item2", 2, true, undefined, null];
let names = new Array("ram", "raj");
console.log(names);

// /array items stored and positioned by index no  (address => index ,, start from 0)
// accessing array item array_name[index]
console.log(names[0]);
names[0] = "rohit";
console.log(names[0]);
console.log(names);
//array are passed by reference
console.log("a" == "a"); //true
console.log([] == []); //true

// =====================object================
//objects are list like arrays by it has key value value pair // store data as key value pair
let studentDetail = ["sajid", "6:30pm", "mindcoder", "mern"];
let studentDetailObj = {
  name: function(){
    return "sajid"
  },
  time: "6:30pm",
  institute: "mindcoder",
  course: "mern development",
};
console.log(studentDetailObj.name())



















let carDetails ={
    model:"tata nexon",
    company:"tata",
    color:"black",
    varient:"petrol",
    price: '7.5 L',
}

//tata nexon
//tata
//black
//petrol
//7.5 L
// console.log(carDetails.model);
// carDetails.model = "harrier"
// console.log(carDetails.model);
// console.log(carDetails.company);
// console.log(carDetails.color);
// console.log(carDetails.varient);
// console.log(carDetails.price);
carDetails.offer = "50% off"
console.log(carDetails)