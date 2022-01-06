"use strict";

//* .getElementsByTagName()
// const pFourth = document.getElementsByTagName('h1');
// for(let i = 0; i < pFourth.length; i++) {
    // pFourth[i].style.color = "pink";
//     pFourth[i].style.color = prompt("Enter color");
//     pFourth[i].style.fontFamily = "Cascadia Mono";
// }
// pFourth[0].innerText = "change the text";

// pFourth[0].textContent = "HI, this is changed";

// for(let i = 0; i < pFourth.length; i++) {
//     pFourth[i].textContent = prompt("Enter new text");
// }

// const pFirst = document.querySelector('body');
// pFirst.style.backgroundColor = "black";

//* getElementsByClassName()
// const varOne = document.getElementsByClassName('list');
// console.log(varOne[0]);

//* querySelectorAll()
const varTwo = document.querySelectorAll('li');
varTwo.forEach( li => {
    li.style.color = "dodgerblue";
    li.style.backgroundColor = "lightgreen";
    li.style.padding = "3px";
    li.style.marginTop = "5px";
})

