'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/// MAPS
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

/// SETS
const currenciesUniuqe = new Set(['USD', 'EUR', 'GBP', 'GBP']);
console.log(currenciesUniuqe);

currenciesUniuqe.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
