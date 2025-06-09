//conditional if else

// if (condition) {
//   //code to be executed if condition is true
// } else {
//   //code to be executed if condition is false
// }

//create a function which takes a number and check if the given number is even or odd and returns us the result

// function checkEvenOdd(num) {
//   if (num % 2 === 0) {
//     return `${num} is even`;
//   } else {
//     return `${num} is odd`;
//   }
// }

// by ternary operator
function checkEvenOdd(num) {
    (num % 2 === 0) ? console.log(`${num} is even`) : console.log(`${num} is odd`)
}



checkEvenOdd(2);
checkEvenOdd(11);

//create a function which takes age of person and tell us weather he/she is permitted to drive
// give a reason to person . why he is not permitted or permitted to dive

//1 if person age is less than 16 he is a kid  and not allowed to drive
//2 if person age is between 16 to less than 18 . he is a teenager and only allowed to drive scooty or gearless vehicle
//3 if person age is greater than 18 or less than 50 . allowed to drive
//4 age more than 50 . not allowed you have to pass test

// function checkPermissionToDrive(age) {
//   if (age >= 18) {
//     return( `person age is ${age} and permitted to drive`);
//   }
//   return `person age is ${age} and not permitted to drive`;
// }
// function checkPermissionToDrive(age) {
//   if (age < 16) {
//     return `person age is ${age} and not allowed to drive because he is a kid`;
//   } else if (age >= 16 && age < 18) {
//     return `person age is ${age} . he is a teenager and only allowed to drive scooty or gearless vehicle`;
//   } else if (age >= 18 && age < 50) {
//     return `person age is ${age} and allowed to drive`;
//   } else {
//     return `person age is ${age} and not allowed to drive because you have to pass test`;
//   }
// }

// function checkPermissionToDrive(age) {
//   if (age < 16) {
//     return `person age is ${age} and not allowed to drive because he is a kid`;
//   }
// //for teenager
//   if (age >= 16 && age < 18) {
//     return `person age is ${age} . he is a teenager and only allowed to drive scooty or gearless vehicle`;
//   }
// //adult or allowed
//   if (age >= 18 && age < 50) {
//     return `person age is ${age} and allowed to drive`;
//   }
//   //senior citizen
//   if (age > 50) {
//     return `person age is ${age} and not allowed to drive because you have to pass test`;
//   }
// }

// && used to shortcircuting or if operator

//ternary operator (? :)

// function checkPermissionToDrive(age) {
//   age < 16 && console.log( `person age is ${age} and not allowed to drive because he is a kid`);
  
// //for teenager
//   (age >= 16 && age < 18) &&   console.log( `person age is ${age} . he is a teenager and only allowed to drive scooty or gearless vehicle`);
//   //adult or allowed
//   (age >= 18 && age < 50) &&   console.log( `person age is ${age} and allowed to drive`);
  
//   //senior citizen
//   (age > 50) && console.log(`person age is ${age} and not allowed to drive because you have to pass test`)
// }


// console.log(checkPermissionToDrive(60));



switch case
