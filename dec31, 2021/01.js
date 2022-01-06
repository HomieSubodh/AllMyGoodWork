"use strict";
const mainButton = document.querySelector(".btn_one");
function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}
const bodyColor = document.querySelector('body');
mainButton.addEventListener("click", function(e) {
    const getRandomColor = randomColorGenerator();
    bodyColor.style.backgroundColor = getRandomColor;
    const h1Changed = document.querySelector(".h1_change");
    h1Changed.textContent = getRandomColor;
    const mainTextColor = document.querySelector("main");
    const colorConstrain = Math.floor(Math.random() * 256);
    mainTextColor.style.color = `rgb(${colorConstrain}, ${colorConstrain}, ${colorConstrain})`;
    mainButton.style.boxShadow = `2px 6px 36px 4px rgba(${colorConstrain}, ${colorConstrain}, ${colorConstrain}, ${Math.random()})`;
})


