'use strict';

// Menu hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('spread');
});

window.addEventListener('click', (ev) => {
  (menu.classList.contains('spread')) && (ev.target !== menu) && (ev.target !== hamburger) ? menu.classList.toggle('spread') : "";
});

// Lightbox

const images = document.querySelectorAll('.work-img');
const imagesLight = document.querySelector('.add-image');
const containerLight = document.querySelector('.image-light');

images.forEach(image => {
  image.addEventListener('click', () => { 
    showImage(image.getAttribute('src'))
  })
})

containerLight.addEventListener('click', (ev) => {
  (ev.target !== imagesLight) ? (hamburger.style.opacity = '1', containerLight.classList.toggle('show'), imagesLight.classList.toggle('show-image')) : '';
})

const showImage = (image) => {
  imagesLight.src = image;
  containerLight.classList.toggle('show');
  imagesLight.classList.toggle('show-image');
  hamburger.style.opacity = '0';
}