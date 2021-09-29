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
console.log(luthfansa.bookings);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = luthfansa.book;
// DOES NOT WORK
// book(23, 'Ahmed');

//// FUNCTION CALL METHOD
book.call(eurowings, 26, 'Ahmed');
console.log(eurowings);

book.call(luthfansa, 154, 'Ashik Ali');
console.log(luthfansa);

const swiss = {
  airline: 'Swiss Air line',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 80, 'Abdullah');

//// FUNCTION APPLY METHOD
const details = [80, 'Abdullah'];
book.apply(swiss, details);

book.call(swiss, ...details);
