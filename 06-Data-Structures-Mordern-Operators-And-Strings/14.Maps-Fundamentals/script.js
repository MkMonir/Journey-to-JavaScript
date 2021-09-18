'use strict';

const rest = new Map();
rest.set('name', 'Kuddus');
rest.set(1, 'Dhaka, Bangladesh');
console.log(rest.set(2, 'Hanoi, Vietnam'));

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get(true));
console.log(rest.get('Open'));

const time = 25;

console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

/// MAPS METHODS

// HAS
console.log(rest.has('Close'));

/// DELETE
rest.delete(2);
console.log(rest);

// SIZE
console.log(rest.size);

// CLEAR ALL
// rest.clear();
// console.log(rest);

/// MAPS WITH ARRAYS
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
