"use strict";
let name = prompt("Enter Your Name");
const varOne = document.querySelector('.special');

if (name === null || name === NaN || name === "") {
    varOne.innerText = `Intro`;
}
else
    varOne.innerText = `${name}`;

const varTwo = document.querySelector('span');
varTwo.innerText = `${name}`;