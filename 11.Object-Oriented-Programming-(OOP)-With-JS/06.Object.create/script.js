'use strict';

/////////////////////
// Object.create
const personProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const mokhles = Object.create(personProto);
mokhles.name = 'Mokhles';
mokhles.birthYear = 2001;

mokhles.calcAge();

const ashik = Object.create(personProto);
ashik.init('Ashik', 2000);
ashik.calcAge();
