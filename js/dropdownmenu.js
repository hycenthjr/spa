let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

let menuStatus = false;

menu.style.visibility = 'hidden';

function dropdown() {
    if (menuStatus == false) {
        menu.style.visibility = "visible";
        menuStatus = true;
    } 
    else if (menuStatus == true) {
        menu.style.visibility = "hidden";
        menuStatus = false;
    }
}

menuBtn.onclick = dropdown;