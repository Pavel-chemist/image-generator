"use strict"
const { invoke } = window.__TAURI__.tauri;

const ctxWidth = 256;
const ctxHeight = 256;

const canvas = document.getElementById("image");
const ctx = canvas.getContext("2d");
let imgData = ctx.createImageData(ctxWidth, ctxHeight);

canvas.addEventListener('click', (event) => {
  invoke('generate_image', {height: ctxHeight, width: ctxWidth, r: event.offsetX, g: event.offsetY, b: 128})
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        imgData.data[i] = response[i];
      }
      
      // imgData.data = response;
      ctx.putImageData(imgData, 0, 0);
    })
})