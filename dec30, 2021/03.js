"use strict";
const focusEvent = document.getElementById("input_one");
focusEvent.addEventListener("focus", function(e){
    this.style.backgroundColor = "lightgreen";
    console.log(`Event details are`, e);
});


//* mouseover event
const buttonEvent = document.querySelector("button");
buttonEvent.addEventListener("mouseover", function(e) {
    console.log(this.textContent);
    console.log("target is",e.target);
    console.log("currentTarget is",e.currentTarget);
})


//! target and currentTarget property
//* traget --> in which element event has been invoked or triggered
//* currentTarget --> in which element we have attached event listener




