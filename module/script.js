let prompt = require("prompt-sync")()


function areaOfCircle() {
    let radius = prompt("enter radius")
  let PI = Math.PI;
  let formula = PI * radius ** 2;
  return formula;
}

function areaofsquare(side) {
  let formula = side * side;
  return formula;
}

console.log(areaOfCircle())

// console.log(areaOfCircle(2));


// console.log(`your name is ${name}`);

// module.exports = {areaOfCircle,areaofsquare};


