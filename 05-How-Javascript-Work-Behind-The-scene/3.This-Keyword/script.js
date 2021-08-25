'use strict';

// console.log(this);

const calcage = function (birthYear) {
  console.log(2021 - birthYear);
  // console.log(this);
};
calcage(2001);

const calcage2 = birthYear => console.log(2021 - birthYear);
// console.log(this);
calcage2(2000);

const monir = {
  year: 2001,
  calcage: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};
monir.calcage();

const kuddus = {
  year: 2012,
};
kuddus.calcage = monir.calcage;
kuddus.calcage();

const mofiz = kuddus.calcage;
