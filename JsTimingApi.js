// js browser provides timing web apis
// 1.setTimeout // one time timer
// 2.setInterval //repeats after a fraction of time
let alertBox = document.getElementById("alertBox");
let clock = document.getElementById("clock");

function welcomeMessage() {
  let message = "welcome to the browser!";
  alertBox.innerHTML = `<h1>${message}</h1>`;
}

//delay setTimeout api

let greeting = setTimeout(welcomeMessage, 4000);

//clearTimeout
// clearTimeout(timerFuntionname)

setTimeout(() => {
  alert("time is up");
}, 5000);

function cancelGreeting() {
  clearTimeout(greeting);
}

//interval
let timer = setInterval(showTime, 1000);
function showTime() {
  console.log("running..");
  clock.innerHTML = `${new Date().toLocaleTimeString()}`;
}
function stopWatch() {
    console.log("stoped")
  clearInterval(timer);
}


