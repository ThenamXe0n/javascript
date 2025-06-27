let menuBtn = document.getElementById("menuBtn")
let menuContainer = document.getElementById("menu-container")
let closeBtn =document.getElementById("close")


function handleMenuBar(){
    // if(menuContainer.classList.contains('hideMenu')){
    //     menuContainer.classList.remove('hideMenu')
    // }else{
    //     menuContainer.classList.add('hideMenu')
    // }
    menuContainer.classList.toggle('hideMenu')
}

menuBtn.addEventListener('dblclick',handleMenuBar)
closeBtn.addEventListener('click',handleMenuBar)
