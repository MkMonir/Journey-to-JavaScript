'use strict';

/// Lectures
const h1 = document.querySelector('h1');

// GOING DOWNWARDS : CHILD
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = '#fff';
h1.lastElementChild.style.color = 'orangered';

// GOING UPWARDS : PARENTS
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// GOING SIDEWAYS : SIBLINGS
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
