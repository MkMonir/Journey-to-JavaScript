'use strict';

/// LEctures
// SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const navLink = document.querySelector('.nav__links');

const allLinks = document.getElementsByTagName('a');
console.log(allLinks);

const allNavItem = document.getElementsByClassName('nav__item');
console.log(allNavItem);

// CREATING AND INSERTING ELEMENTS
// insertAdjacentHTML method
const html = `<li class="nav__item">
                <a class="nav__link nav__link--btn btn--show-modal" href="#">Creat</a
            ></li>`;
navLink.insertAdjacentHTML('beforeend', html);

const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.innerHTML =
  'We use cookied for improved functionality and analytics <button class="btn--text btn--scroll-to">Got It!</button>';

// header.append(msg);
// header.prepend(msg.cloneNode(true));

// header.before(msg.cloneNode(true));
header.after(msg);

// Delete Elements
// document.querySelector('body').addEventListener('click', function () {
//   msg.remove();
// });

// Styles
msg.style.width = '100%';
msg.style.backgroundColor = '#37382d';
msg.style.textAlign = 'center';
msg.style.color = '#777';

console.log(msg.style.backgroundColor);
console.log(getComputedStyle(msg).height);

msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 0 + 'px';
console.log(msg.style.height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

/// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non Standard
console.log(logo.getAttribute('designer'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attribues
console.log(logo.dataset.versionNumber);

// Dont Use
// logo.className = 'Hello';
