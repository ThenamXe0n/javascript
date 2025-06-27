// 1 change image using url input 
// /input element
//image element

// 2//frame border element
// borderinput Element
let image = document.getElementById("image")
let urlInput = document.getElementById("imgInput")
let frame = document.getElementById("image-frame")
let frameColorInput = document.getElementById("frameInput")
let backround = document.getElementById("screen")
let backroundInput = document.getElementById("screenBgInput")
let font = document.getElementById("title")
let fontInput = document.getElementById("fontClrInput")
let frameWidthInput = document.getElementById("frameWidthInput")
let frameRadiusInput = document.getElementById("frameRadius")



function changeImage(){
    image.src = urlInput.value
}

function changeFrameColor(){
    frame.style.backgroundColor = frameColorInput.value
}

function changeBackgroundColor(){
    backround.style.backgroundColor = backroundInput.value
}
function changeFontColor(){
    font.style.color = fontInput.value
}


function changeFrameThikness(){
    console.log("thikness working",frameWidthInput.value)
    frame.style.padding = `${frameWidthInput.value}px`
}

function changeFrameRadius(){
    console.log("radius :",frameRadiusInput.value)
    frame.style.borderRadius = frameRadiusInput.value+"px"
}


//adding event listner to elements
urlInput.addEventListener('change',changeImage)
frameColorInput.addEventListener('input',changeFrameColor)
backroundInput.addEventListener('input', changeBackgroundColor)
fontInput.addEventListener('input', changeFontColor)
frameWidthInput.addEventListener('input', changeFrameThikness)
frameRadiusInput.addEventListener('input',changeFrameRadius)