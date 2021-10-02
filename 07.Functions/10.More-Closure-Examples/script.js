'use strict';

/// EXAMPLE-1
let f;

const g = function () {
  const a = 20;
  let b = 10;
  f = function () {
    b++;
    console.log(`${a * 2}, ${b}`);
  };
};

const h = function () {
  const a = 2;
  const l = {
    name: 'Kuddus',
  };
  const m = ['Ashik', 'Ali'];

  f = function () {
    console.log(`Why there ${a * 2} ${l.name}${m[1]} name.`);
  };
};

g();
f();

/// REASIGN F FUNCTION
h();
f();

/// EXAMPLE-2
const boardpassengers = function (num, wait) {
  const preGroup = num / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${num} passengers`);
    console.log(`three are 3 groups, each with ${preGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// const preGroup = 1000;
boardpassengers(150, 5);
