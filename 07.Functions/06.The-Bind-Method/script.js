'use strict';

const luthfansa = {
  airline: 'luthfansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
luthfansa.book(230, 'Kuddus Ali');
luthfansa.book(260, 'Ashik Pro');

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

const book = luthfansa.book;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(luthfansa);
const bookLX = book.bind(swiss);

bookEW(25, 'Ashikur Rahman');

/// PART OF ARGUMENT WE CAN APPLY BEFORE FUNCTION BEING CALLED
const bookEW23 = book.bind(eurowings, 65);
bookEW23('Abbas');
bookEW23('Milan');

/// BIND METHOD WITH EVENT LISTENERS
luthfansa.planes = 300;
luthfansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', luthfansa.buyPlane.bind(luthfansa));

///PARTICAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.25);
console.log(addVAT(200));
console.log(addVAT(26));

console.log('=========================');

const addTaxRate = function (rate) {
  return function (value) {
    const tax = value + value * rate;
    console.log(tax);
  };
};
addTaxRate(0.23)(100);
