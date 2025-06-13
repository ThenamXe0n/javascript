// //loops in javascript
// // continueous process are considered as loop

// //print table of 2 in terminal
// // console.log(`2 x 1 = ${2 * 1}`);
// // console.log(`2 x 2 = ${2 * 2}`);
// // console.log(`2 x 3 = ${2 * 3}`);
// // console.log(`2 x 4 = ${2 * 4}`);
// // console.log(`2 x 5 = ${2 * 5}`);
// // console.log(`2 x 6 = ${2 * 6}`);
// // console.log(`2 x 7 = ${2 * 7}`);
// // console.log(`2 x 8 = ${2 * 8}`);
// // console.log(`2 x 9 = ${2 * 9}`);
// // console.log(`2 x 10 = ${2 * 10}`);

// //syntax
// //for loop

// // for("declaration"(optional) ; "condition"(loop);"changes like increment and decrement and exponential " ){
// // //code
// // console.log(`2 x 1 = ${2 * 1}`);
// // }

// for(let count=0;count<=10;count++){
//     // console.log("value of count is : ",count)
//     console.log(`2 x ${count+1} = ${2 * (count+1)}`);
// }

// //print every character of given string in next line but do not use \n
// let str = "JAVASCRIPT is a programming language"
// // output
// // J
// // A
// // V
// // A
// // S
// // C

// // console.log(str[0])
// // console.log(str[1])
// // console.log(str[2])
// // console.log(str[3])
// // console.log(str[4])
// // console.log(str[5])
// // console.log(str[6])
// // console.log(str[7])
// // console.log(str[8])
// // console.log(str[9])

// let strLastIndexNumber = str.length-1
// console.log(strLastIndexNumber)
// for(let idx=0;idx<=strLastIndexNumber;idx++){
//     console.log("loop" , idx)
//     console.log("letter on ",str[idx])
// }

// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// //do while
// let userPassword="mindcoders"
// let password="mindcoders" ;

// "" !=="mindcoders" // true

// while(userPassword !== password ){
//     userPassword = prompt("enter your age")
//     console.log("tried password")
// }

// do{
//      userPassword = prompt("enter your age")
//     console.log("tried password")
// }while(userPassword !== password )

while (false) {
  console.log("loop");
}

let num = 5;

// while(num!==5){
//     num = parseInt(prompt("enter your num"))
//     console.log(typeof(num))
// }

// do {
//   num = parseInt(prompt("enter your num"));
//   console.log(typeof num);
// } while (num !== 5);

// create a function which will start a number guessing game .
// it will keep asking user for number untill the user guesses the right number

function numberGuessGame() {
  let score = 10;
  let chanses = 0;
  let number = Math.round(Math.random() * 30);
  //   console.log("genrated number is ",number)
  let userNumber;
  while (number !== userNumber) {
    chanses = chanses + 1;
    score = score - chanses;
    if (score === 0) {
      return "you lost the game";
    }
    userNumber = parseInt(prompt("enter a number between 1 to 30"));
    if (userNumber == number) {
      return alert(
        `hint:you guessed correct number ${number} taken ${chanses} chanses`
      );
    }
    if (userNumber > number) {
      alert("hint:try a smaller number");
    } else {
      alert("hint:try a bigger number");
    }
  }
}

//create a rock paper sessiors game
function rockPaperScissors() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex);

  //arrays
  let computer = options[randomIndex];
  let user =
    options[
      parseInt(prompt("choose a option between rock:0 , paper:1,scissiors:2"))
    ];

  if (![0,1,2].includes(user)) {
    return alert("enter valid option");
  }

  if (user === "paper" && computer === "rock") {
    return alert(`user win .computer choosed : ${computer}`);
  }
  if (user === "rock" && computer === "paper") {
    return alert(`user lost .computer choosed : ${computer}`);
  }
  if (user === "paper" && computer === "scissors") {
    return alert(`user lost .computer choosed : ${computer}`);
  }
  if (user === "scissors" && computer === "paper")
    return alert(`user win .computer choosed : ${computer}`);
  if (user === "rock" && computer === "scissors")
    return alert(`user win .computer choosed : ${computer}`);
  if (user === "scissors" && computer === "rock")
    return alert(`user lost .computer choosed : ${computer}`);
  if (user === "rock" && computer === "rock") return alert("it is a draw");
  if (user === "scissors" && computer === "scissors")
    return alert("it is a draw");
  if (user === "paper" && computer === "paper") return alert("it is a draw");
}
