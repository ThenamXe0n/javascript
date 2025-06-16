let studentNames = [
  "sajid",
  "anjali",
  "dheeraj",
  "khushi",
  "kritika",
  "ankita",
];

// find length or number of items stored in a given array
console.log(studentNames.length);

//find if a item exist in given array (includes) return boolean (true/false)
let student = "nameet";
console.log(
  `your name :${student} is list studentList  status : ${studentNames.includes(
    student
  )} `
);

//reverse the order of array items(reverse)
console.log(typeof studentNames.reverse());

// to convert a array into string but join them with a "given string or symbol"(join)
console.log(studentNames.join("/"));
console.log(studentNames.toString());

//reverse a given string
let word = "hello"; //olleh
//reverse is a array method if some how we convert word into array we can use reverse method
console.log(word.split("").reverse().join(""));

//to add items in a array push(item) is used note : push adds item at the end of array
console.log("before", studentNames);
studentNames.push(student);
console.log("after", studentNames);

// to remove last items from array pop()
studentNames.pop();
console.log(studentNames);

//to add items at start position of array unshift()
studentNames.unshift("sachin", "raj");
console.log(studentNames);

// to remove items from start position of array shift()
studentNames.shift();
studentNames.shift();
studentNames.shift();
console.log(studentNames);

//if i want to add item at a certain position or index or remove item from given postion index
// splice("index","deleteCount","items to insert")

let games = ["cricket", "football", "chess", "hockey"];
//remove football (pos or index : 1) from games array
//delete football and replace it with khokho
// games.splice(1,1)
games.splice(1, 0, "khokho", "table tennis");
console.log(games);

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let removeItem = 8
// let index = numbers.indexOf(8)
// console.log("index of 8",index)
// console.log(numbers.toSpliced(index,1))
// console.log(numbers.toSpliced(4,0,5))
// console.log(numbers)

//toSplice

// splice is used to delete,update and inset items in array on behalf of index no

//slice method
//slice is used to get a part of array
let sliced = numbers.slice(5, -3);
console.log(sliced);
console;

console.log([1, 2].concat([3, 4], [5, 6])); //[1,2,3,4,5,6]

// console.log([1,2]+[2,3]+)

let filtered = studentNames.filter(function (student) {
  student.includes("a");
});

console.log(filtered);

// find method in array(find single item)

let names = ["raj", "mike", "john doe", "raja"];

let studentDetails = [
  { name: "tohid", age: 18 },
  { name: "sajid", age: 21 },
  { name: "khushi", age: 20 },
  { name: "dheeraj", age: 21 },
];

let foundStudentDetail = studentDetails.find((detail) => {
  console.log("running");
  return detail.age > 20;
});
console.log(foundStudentDetail);

// let ItemToFind = names.find((name) => {
//   return name.includes("john");
// });
// console.log("found name", ItemToFind);

//filter (used to get multiple filtered value or items)
let filterStudentDetails = studentDetails.filter((details, i, arr) => {
  // console.log(a)
  console.log("running filter", i);
  return false;
});
console.log(filterStudentDetails);


