'use strict';

const orderSet = new Set(['Pizza', 'Risotto', 'Pizza', 'Pasta', 'Pasta']);
console.log(orderSet);

/// SET SIZE
console.log(orderSet.size);

// THOSE VALUE SET HAVE OR NOT
console.log(orderSet.has('Berger'));
console.log(orderSet.has('Pasta'));

/// ADD NEW VALUE
orderSet.add('Berger');
console.log(orderSet);

// DELETE VALUE
orderSet.delete('Berger');

// WE CAL LOOP OVER SET
for (const order of orderSet) console.log(order);

///EXAMPLE
const staff = [
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Chef',
  'Waiter',
  'Waiter',
];
console.log(staff);

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
