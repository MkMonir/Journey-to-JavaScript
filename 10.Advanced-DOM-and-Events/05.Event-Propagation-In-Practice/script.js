'use strict';

/// Lectures
const randomInit = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

const randomColor = () =>
  `rgb(${randomInit(0, 255)},${randomInit(0, 255)},${randomInit(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);

  // STOP PROPAGATION
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);
});
