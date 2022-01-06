"use strict";
console.log('%c Your site sucks!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
const rootNode = document.getRootNode();
console.log(rootNode);
const htmlNodes = (rootNode.childNodes[1]);
console.log(htmlNodes);
const headNodes = htmlNodes.childNodes[0];
console.log(headNodes);
console.log(headNodes.childNodes[5]);
console.log(`Parent Node is:`);
console.log(headNodes.parentNode);

//! sibling relation
//* next sibling
console.log(headNodes.nextSibling.nextSibling);

//* sibling relation
console.log("Parent Node of h1 is: ");
const h1ParentNode = document.querySelector('h1');
const bodyOfHTML = h1ParentNode.parentNode;
bodyOfHTML.style.backgroundColor = "#0E141A";
bodyOfHTML.style.color = "#FFF";
bodyOfHTML.childNodes[1].style.color = "red";
bodyOfHTML.childNodes[3].style.color = "yellow";


//* adding a class
const setClass = document.querySelector('h1');
setClass.classList.add('underline_h1');

//* remove a class
setClass.classList.remove('underline_h1');

//! add element
const addNewElement = document.createElement("div");
addNewElement.textContent = 'A new Div';
const olderElement = document.querySelector('.first_div');
olderElement.append(addNewElement);
addNewElement.classList.add('second_div')
addNewElement.style.color = "red";

const addNewElementTwo = document.createElement("div");
addNewElementTwo.textContent = "A newer h1";
const olderElementTwo = document.querySelector('.second_div');
olderElementTwo.append(addNewElementTwo);
addNewElementTwo.classList.add('third_div');
addNewElementTwo.style.color = "orchid";

//! remove element
/*
const thirdDiv = document.querySelector('div .second_div');
thridDiv.remove();
*/

//! before and after add
const addNewElementThree = document.createElement('li');
addNewElementThree.style.textAlign = "center";
addNewElementThree.textContent = "New list";
// olderElement.after(addNewElementThree);
olderElement.before(addNewElementThree);


//* insertHTML element
olderElement.insertAdjacentHTML("afterbegin", `<button style="padding: 3px">Click Here!!</button><br>`);

const listItems = document.querySelectorAll(".todoList li");
const ul = document.querySelector('.todoList');
const sevenList = document.createElement('li');
sevenList.textContent = "Added item 7";
ul.appendChild(sevenList);
const listItem = document.querySelector(".todoList");
listItem.style.backgroundColor = "white";

//! JS Events

console.log('%cHi, You Clicked Me??', 'color: pink; font-size: 40px; font-weight: bolder')


//! JS Event --> with methods
const buttonEvent = document.querySelector('.btn_one');
function clickBtnAction() {
    let a = prompt("What is 5 + 6");
    // if(a === "11") {
    //     buttonEvent.style.backgroundColor = "red";
    // }
    if(parseInt(a) === 11) {
        buttonEvent.style.backgroundColor = "violet";
    }
    else
        alert("Wrong Answere!!");
}
buttonEvent.addEventListener("click", clickBtnAction);


const add = document.querySelector(".btn_two");

function addition() {
    const write = document.querySelector(".h1_last");
    const b = prompt("Enter first number");
    const c = prompt("Enter second number");
    const sum = parseInt(b) + parseInt(c);
    write.style.color = "red";
    write.style.fontSize = "3em";
    write.style.backgroundColor = "white";
    write.style.height = "1.5em";
    write.style.width = "auto";
    write.style.textAlign = "center";
    write.textContent = `${parseInt(b)} + ${parseInt(c)} = ${sum}`;
}
add.addEventListener("click", addition);

//* this keyword and event
