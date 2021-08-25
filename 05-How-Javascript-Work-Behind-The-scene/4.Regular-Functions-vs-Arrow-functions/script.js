'use strict';

var firstName = 'Monir';
console.log(this.firstName);

const monir = {
  firstName: 'Monir',
  year: 2001,
  calcage: function () {
    // console.log(this);
    console.log(2021 - this.year);

    ///SOLUTION 1
    // const that = this;
    // const isMillenial = function () {
    //   console.log(that);
    //   console.log(that.year >= 1990 && that.year <= 2005);
    // };
    // isMillenial();

    ///SOLUTION 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1990 && this.year <= 2005);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hello ${monir.firstName}`);
  },
};
monir.calcage();
monir.greet();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 6, 9);

const addAroow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addAroow(2, 5);
