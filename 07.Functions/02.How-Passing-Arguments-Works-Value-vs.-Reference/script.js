'use strict';

const flight = 'LH23';

const kuddus = {
  firstName: 'Kuddus Ali',
  passport: 288740273,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LG34';
  passenger.firstName = 'Md.' + passenger.firstName;

  if (passenger.passport === 288740273) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, kuddus);
console.log(flight);
console.log(kuddus);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(kuddus);
checkIn(flight, kuddus);
