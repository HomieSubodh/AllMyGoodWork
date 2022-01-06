"use strict";
//* keypress and mouseover

/*
const keypressData = document.body;
keypressData.addEventListener("keypress", (e) => {
    const changeReflect = document.getElementById('change');
    console.log(e.key);
    changeReflect.textContent = e.key;
});
*/

//* keypress effect on div's */


//! problematic //
/*
const selectDivAll = document.querySelectorAll("div.otg .otg_div");
for (let x of selectDivAll) {
    x.addEventListener("keypress", (e) => {
        // const visibleText = document.querySelector('.otg .otg_div');
        // visibleText.textContent = e.key;
        console.log(e.key);
    })
}
*/

//* mouseover */
const mouseoverDiv = document.querySelector('.colorChanging__div');
mouseoverDiv.addEventListener("mouseover", (e) => {
    console.log("Your hover over the div");
    const colorConstrain = Math.floor(Math.random() * 256);
    mouseoverDiv.style.backgroundColor = `rgb(${colorConstrain}, ${colorConstrain}, ${colorConstrain})`;
    mouseoverDiv.style.transition = ".3s";
})

