"use strict"

let buttonElement = document.getElementById("btn");
let rectangleElement = document.getElementById("colored-rectangle");

buttonElement.addEventListener('click', () => {
  
  if (rectangleElement.classList.contains("green")) {
    rectangleElement.classList.remove("green");
  } else {
    rectangleElement.classList.add("green");
  }
});