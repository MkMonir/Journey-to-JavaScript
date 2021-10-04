'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

/// NORMAL FUNCTION
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// });
// console.log(movements);
// console.log(movementsUSD);

// ARROW FUNCTION
const movementsUSD = movements.map(mov => mov * euroToUSD);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movemnet ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrawe'} ${mov}`
);
console.log(movementsDescriptions);
