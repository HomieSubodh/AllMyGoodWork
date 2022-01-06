"use strict";
//* to check HTML object */
// console.log(window.document);
// console.log(this.document);
//
//* to check JS objects/JS representation */
// console.dir(window);

//* getElementById() */
// console.log(document.getElementById("only_id"));
// console.dir(document.getElementById("only_id"));
// console.log(typeof document.getElementById("only_id"));

//* select element by querySelector */
const varOne = document.querySelector("#only_id");
console.log(varOne.textContent);
varOne.textContent = "Text must be changed";
varOne.style.textDecoration = "overline";
// console.log(varOne.textContent);
// console.log(`with querySelector: ${varOne}`);
// console.log(varOne);

// console.log(document.querySelector(".ul"));
// console.log(document.getElementsByClassName(".hi"));

//* select element by querySelectoraAll */
// const varOne = (document.querySelectorAll(".all_li"));
// console.log(varOne);
// console.log(varOne[0]);


const varTwo = document.querySelector('.headline h2');
varTwo.style.color = 'red';

// const varThree = document.querySelectorAll('.all_li');
// console.log(varThree);
// varThree[0].textContent = "Changed";

const varThree = document.getElementsByClassName('all_li');
// console.log(varThree);
varThree[0].style.color = 'orchid';
varThree[0].textContent = "Actually changed!!!";
console.log(varThree[1].textContent);



const varFour = document.getElementsByClassName('secondList');
for(let i = 0; i < varFour.length; i++) {
    varFour[i].style.textDecoration = 'underline';
    varFour[i].style.color = "yellow";
    varFour[i].style.fontSize = "1.5em";
    varFour[i].style.backgroundColor = "pink";
    varFour[i].style.width = '15em';
    varFour[i].style.textAlign = 'center';
    varFour[i].style.listStyle = 'none';
    varFour[i].style.margin = 'auto';
    varFour[i].style.padding = '.35em';
}

const varFive = document.getElementsByTagName("p");
varFive[0].style.color = 'red';
varFive[1].style.backgroundColor = 'green';
varFive[1].style.color = 'yellow';
varFive[1].style.borderRadius = '10px';
varFive[1].style.paddingLeft= '.5em';




//* innerHTML */
const varSix = document.querySelector('.p_one');

console.log(Array.isArray(varSix));

varSix.innerHTML = "<h1>Changed ??</h1>";
let a = prompt("put a number");
let b = prompt("put a second number");
let c = parseInt(a) + parseInt(b);
// varSix.textContent = "Content has all";
let bgColor = prompt("put a color");
const varSeven = document.querySelector('.p_two');
varSeven.innerHTML = `<h2 style="font-family: 'Righteous', cursive; color: white;">We Changed it again</h2>`;
varSeven.innerHTML += `<button style = "color: red; width: 100%; margin: auto; margin-bottom: 10px; background-color: ${bgColor}" > printed ${c}px </button>`;


