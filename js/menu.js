'use strict';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('spread');
});

window.addEventListener('click', ev => {
  (menu.classList.contains('spread')) && (ev.target !== menu) && (ev.target !== hamburger) ? menu.classList.toggle('spread') : "";
})