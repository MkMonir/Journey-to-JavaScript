'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 5,
  price = numPassengers * 5
) {
  // ES5 WAY TO GIVE DEFAULT PARAMETERS
  //   numPassengers = numPassengers || 10;
  //   price = price || 150;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(booking);
};

createBooking('LH123');
createBooking('LH123', 50, 155);
createBooking('LH123', 50);
