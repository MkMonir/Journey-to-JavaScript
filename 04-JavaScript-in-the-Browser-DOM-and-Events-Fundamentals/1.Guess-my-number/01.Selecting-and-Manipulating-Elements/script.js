'use strict';

/// SELECTING AND MANIPULATING ELEMENTS

console.log(document.querySelector('.btn').textContent);
document.querySelector('.btn').textContent = 'Click';
console.log(document.querySelector('.btn').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 18;
console.log(document.querySelector('.guess').value);
