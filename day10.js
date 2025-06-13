let studentNames = ["sajid","anjali","dheeraj","khushi","kritika","ankita"]

// find length or number of items stored in a given array
console.log(studentNames.length)

//find if a item exist in given array (includes) return boolean (true/false)
let student = "anjali"
console.log(`your name :${student} is list studentList  status : ${studentNames.includes(student)} `)


//reverse the order of array items(reverse)
console.log(typeof(studentNames.reverse()))



// to convert a array into string but join them with a "given string or symbol"(join)
console.log(studentNames.join("/"))
console.log(studentNames.toString())

//reverse a given string 
let word="hello" //olleh
//reverse is a array method if some how we convert word into array we can use reverse method
console.log(word.split("").reverse().join(""))

