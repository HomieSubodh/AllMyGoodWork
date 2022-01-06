"use strict";
let n = 0;
const buttons = document.querySelectorAll('div.buttons .btn');

function demo() {
    console.log(`You hit me: ${n}`);
    n++;
}

for (let button of buttons) {
    button.addEventListener("click", demo);
}

//* event object
let i = 0;
const firstBtn = document.querySelector('#btn_one');
firstBtn.addEventListener("click", function () {
    console.log(this);
    this.textContent = `You clicked me for ${i}`;
    i++;
    if (n == 10) {
        this.style.backgroundColor = "lightgreen";
    }
    if (n == 20) {
        this.style.backgroundColor = "rgb(224, 50, 7)";
        this.textContent = `You crossed clicked for ${i}`;
    }
});
//! with arrow functionffs

//* click me to change the backgffsround color

const darkTheme = document.querySelector('.bg-color');
let x = 1;

function darkThemeFunction() {
    const bodyOnClick = document.querySelector('body');
    if (x % 2) {
        bodyOnClick.style.backgroundColor = "#09131B";
        darkTheme.innerHTML = ` <i class="far fa-lightbulb"></i> Light`;
        bodyOnClick.style.transition = "1s";
        darkTheme.style.color = 'white';
    } else {
        bodyOnClick.style.backgroundColor = "white";
        darkTheme.innerHTML = `<i class="fas fa-moon"></i> Dark`;
        darkTheme.style.color = 'black';
    }
    x++;
}
darkTheme.addEventListener("click", darkThemeFunction);
// Odd --> dark; even --> light
