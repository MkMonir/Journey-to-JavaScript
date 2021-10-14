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
document.querySelector('body').addEventListener('click', function () {
  msg.remove();
});

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
