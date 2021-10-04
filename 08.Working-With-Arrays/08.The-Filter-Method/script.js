'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);
const deposits = movements.filter((mov, i, arr) => mov > 0);
console.log(deposits);
