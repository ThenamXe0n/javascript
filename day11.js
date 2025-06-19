///sort in array

// Array.sort((a,b)=>{})

let ranks = [15, 2, 22, 3, 6, 5, 4, 7, 8, 9, 1];

let sort = ranks.sort();
console.log(sort);

// let ascRanks = ranks.sort((a,b)=>{
//     return a-b //+ swap //-no swapping

// })
// let descRanks = ranks.sort((a,b)=>{
//     return b-a //+ swap //-no swapping

// })
// console.log(ascRanks)
// console.log(descRanks)
// console.log(ranks)

let letters = ["aman", "bunty", "david", "fill", "aayush", "abhansh"]
  .sort()
  .reverse();
console.log(letters);

//forEach() //used to loop over a array and this method return undefined(always )

// console.log(forEachResult)
//findIndex

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Maxrie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

console.log("indexof", letters.indexOf("bunty"));

let letterWithBIdx = letters.findIndex((item) => {
  return item.includes("b");
});
let inventorWithBIdx = inventors.findIndex((item) => {
  return item.first.toLowerCase().includes("x");
});
console.log("findIndex", letterWithBIdx);
console.log("findIndex", inventorWithBIdx);
console.log(inventors[inventorWithBIdx]);

// letters.findIndex()

let charList = ["a", ["b", "c"], ["d", "e", "f"]]; //["a","b","c","d","e","f"]
console.log(charList.length);
let flattenCharList = charList.flat();
console.log(flattenCharList.length);

let checkAllEven = ranks.some((item) => {
  return item % 2 === 0;
});

console.log(checkAllEven)


