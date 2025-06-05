// string and its methods
let str1="mindcoderd"
let str = "javascript has java predefined function also refer as methods"
//how to find no of letter in a sring 
console.log(str1.length)

//to find index of any charater in string // index are positions and it start from 0 and length starts with 1
// indexof
let char = "java  " 
console.log(`the position of first letter of ${char} is ${str.indexOf(char)} and position of last letter of char is ${str.indexOf(char)+char.length-1} `)

//lastIndexOf
console.log(`(last index of)the position of ${char}  is ${str.lastIndexOf(char)}`)

let index = 0
let indexOfLastWord = 9
//charAt
console.log(`the char at position ${index} is ${str.charAt(index)} and the char at last  ${indexOfLastWord} is ${str.charAt(indexOfLastWord)} `)


//includes
char = " java"
// str "javascript has predefined function also refer as methods"
console.log(`does string : ${str} contains ${char} ? \n ${str.includes(char)}`)

//trim (remove extra spaces)
let spaceChar = "         hi!   there       "
console.log(spaceChar.length)
console.log(spaceChar.trim().length)
console.log(spaceChar.trimStart().length)
console.log(spaceChar.trimEnd().length)
// remove space from start trimStart


//padStart
//padEnd
let bankAccountNo= "7265"
console.log(`your account no is ${bankAccountNo.padEnd(15,"X")}`)
//concat
let name = "mindcoder"
let lastName = "pvt ltd"
let fullName  = name.concat(lastName,"hello","world")
console.log(fullName)