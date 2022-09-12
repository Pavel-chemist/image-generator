"use strict"
const { invoke } = window.__TAURI__.tauri;

const buttonElement = document.getElementById("btn");
const rectangleElement = document.getElementById("colored-rectangle");
const text = document.getElementById("text-output");

function greet(color) {
  invoke('greet', { name: 'Pavel', color: color })
  // `invoke` returns a Promise
  .then((response) => {
    text.innerText = response;
  });
}

buttonElement.addEventListener('click', () => {
  
  if (rectangleElement.classList.contains("green")) {
    rectangleElement.classList.remove("green");
    greet("yellow");
  } else {
    rectangleElement.classList.add("green");
    greet("green");
  }
});