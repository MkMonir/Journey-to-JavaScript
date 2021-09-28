'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// HIGHER-ORDER FUNCTION

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
console.log('========');
transformer('Javascript is the best', oneWord);

// JS USES CALLBACKS ALL TIME
const high5 = function () {
  console.log('👋🏿');
};
document.body.addEventListener('click', high5);

['Kuddus', 'Mofiz', 'Ashik'].forEach(high5);
