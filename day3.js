//operators in javascript
//1. assignment operators (=)
//1. Arithmetic operators (+,-,*,/,%,++,--,**,+=,-=,*=,/=,)
console.log(5 % 3); // output:remider
let num = 0;
console.log(`view number : ${num}`);
++num;
console.log(`view number after increment : ${++num}`);
console.log(++num);
console.log(3 ** 3); //Es6

let a = 5;
let b = 6;
a += b;
console.log(a);

//comparision operations(<,>,<=,>=,)
// not Equal !=
//strict not equal !==
//comparision operator (==) //js performs coerrsion (conversion) before comparing the value
//strict comparision (===) // directly compares the values

console.log("5==5 is : ",5 == 5);
console.log("5=='6' is : ",'5' == 5);
console.log(false==0)
console.log(null<=false)
console.log(undefined==false)


console.log(true-false)

//logical operators
// //AND(&&)
// //OR(||)
// //NOT(!)
// console.log(5+5==10 || 5+2==8);

// ternary operator condition?case1 :case2 
// short circuiting &&
// option chaning ?
// nullism ??

console.log(0 ?? 5)
