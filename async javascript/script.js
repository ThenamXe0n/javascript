function a(){
    console.log("i am A")
}

function hellow(){
    console.log("hellow")
}

function javascript(){
    console.log("i am javascript")
}

function greet(name){
    console.log(`good evening ${name}`)
}

// a()
// hellow()
// greet("sahil")
// javascript()

// i am A
//hellow

setTimeout(greet,5000)
a()

/// async  and await

async function getQuote() {
    let name = await "mindcoders"
  let response = await fetch("https://dummyjson.com/quotes");
  let data = await response.json()
  document.write(JSON.stringify(data));
}
getQuote()


