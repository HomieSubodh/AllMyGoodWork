"use strict";
const varOne = document.querySelector('.btn');
var n = 1;
function buttonClick() {
    const div = document.querySelector(".div_one");
    const theLogo = document.querySelector(".btn");
    if(n % 2) {
        div.style.display = 'block';
        div.style.transition = "1s";
        div.style.transform = 'scale(1.3) rotate(360deg)';
        div.style.marginTop = "1em";
        div.style.opacity = "100%";
        theLogo.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    }
    else {
        div.style.display = "none";
        div.style.opacity = "0%";
        div.style.transition = "1s";
        theLogo.style.color = 'white';
        theLogo.innerHTML = `<i class="fas fa-plus-circle"></i>`;
    }
    n++;
}
varOne.addEventListener("click", buttonClick);