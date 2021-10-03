'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/// WITH FOR OF LOOP
for (const [i, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${i + 1}: You deposited ${value}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(value)}`);
  }
}

console.log('====== ForEach=======');
/// WITH ForEach ARRAY METHOD
movements.forEach(function (value, i, arr) {
  if (value > 0) {
    console.log(`Movement ${i + 1}: You deposited ${value}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(value)}`);
  }
});
