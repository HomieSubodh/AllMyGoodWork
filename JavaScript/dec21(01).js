"use strict";
document.querySelector('h1').style.color = "red";
document.querySelector('h1').style.fontFamily= "Cascadia Mono";
document.write('<br>');
// document.write("<h1>Another Line</h1>");
// console.log(document.getElementById('first_p'));
const pFirst = document.getElementById('first_p');
pFirst.textContent = "The text has been changed";
pFirst.style.color = "lightgreen";
pFirst.style.fontSize = "4em";
pFirst.style.fontFamily = "Operator mono";
console.log(pFirst);

const pThird = document.querySelector('body');
pThird.style.backgroundColor = "black";

const pSecond = document.querySelector('h2.heading');
pSecond.style.color = "dodgerblue";
pSecond.textContent = "This text will be changed";
pSecond.style.fontFamily = "Cascadia Mono";

//* .getElementsByTagName()
const pFourth = document.getElementsByTagName('');
for(let i = 0; i < pFourth.length; i++) {
    pFourth[i].style.color = "pink";
}