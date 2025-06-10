//switch
// let input = "abc";
// switch (input) {
//   case "car":
//     console.log("this is case 1");
//     break;
//   case "bike":
//     console.log("this is case 2");
//     break;
//   case "train":
//     console.log("this is case 3");
//     break;
// }

/// you have to create a movie booking movie price function which takes movie name and give movie price to user
function moviePrice() {
  let movieName = prompt("Enter the movie name");
  movieName = movieName.toLowerCase();
  // alert(movieName)

  switch (movieName) {
    case "genius":
      alert(`${movieName} ticket is of 200 rupess`);
      break;
    case "housefull 5":
      alert(`${movieName} ticket is of 300 rupess`);
      break;
    case "animal":
      alert(`${movieName} ticket is of 200 rupess`);
      break;
    default:
      alert("movie not found");
  }
}

moviePrice();


//variable
//hoisting
//tdz
//functions
//conditionals
//switch
//heap
//stack 
//javacript
//html
//css
