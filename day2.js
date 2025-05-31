//data types in javascript
// 1.primitive
//    -string (charter,letter,name,paragraph)
//    -number (integer,decimal,octal,hexadecimal) -NAN(not a number)
//    -boolean (true/false || 1,0)
//    -null
//    -undefined
//    -BigInt (to store more that 16-digit number or bigInt is defined by *number*n e.g 16n)

// 2.non-primitive(collection of primitive , )
//    -array(collection of primitive data types i.e a list)
//    -object(collection of primitive data types i.e a dictionary it store key value pair)

// ============ STRINGS IN JS ==============
// Defining a string
// - use double quotes("") , single quote('') , templete literals (``) ,
// using new String("string") keyWord ❌

// ==========data type checking in js========
// typeof function(predefined)
typeof "data to check";

let studentName = "sajid";
let contactNo = 989998998;
/// check what is the data type of varibale studentName
console.log(typeof studentName);
console.log(typeof contactNo);
console.log(typeof "989989989");

// + (act as concadinator as well as addition operator)

let num1 = 5;

let num2 = 10;

let num3 = 5;

console.log(`num3 type is = `, typeof num3);

console.log("sum of num1 and ${num2+num3} :", num1 + num2 + num3);

//why to use templete literals
console.log('""');
console.log("hi my  name is nameet \n and i am learning javascript");
// - in ` ` we can write char and varibles in same string
console.log(`sum of num1 and num2+num3 :${5 + 96 + 8 / 100}`);
//

console.log(
  "hello , my name is *your name* and i belog to *your city* city and I am learning *whatever you are learning* i want to become *whatever you want to be*"
);


//=============================big Int==================

// let x = 9999999999999995n /*=  9999999999999999 */
// let y =4n
// console.log(x+y)


// what is the type of null and undefined
console.log(typeof(undefined));
console.log(typeof(null)); //javasript treats everything as an object