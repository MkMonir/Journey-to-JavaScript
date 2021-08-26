'use strict';

//PRIMITIVES TUPY
let age = 20;
let oldAge = age;
age = 15;
console.log(oldAge);
console.log(age);

///REFERENCE TYPE
const kuddus = {
  firstName: 'Kuddus',
  lastName: 'Ali',
  age: 25,
};

const kuddusChangeNam = kuddus;

kuddusChangeNam.lastName = 'khan';
console.log('Before marrige', kuddus);
console.log('After marrige', kuddusChangeNam);

// const kuddus2 = kuddus;
// kuddus2.lastName = 'Ali';
// console.log(kuddus2);

////COPYING OBJECTS
const kuddus2 = {
  firstName: 'Kuddus',
  lastName: 'Ali',
  age: 25,
  friends: ['Ali', 'Mokhles'],
};

const kuddusCopy = Object.assign({}, kuddus2);
kuddus2.lastName = 'Khan';
kuddusCopy.friends.push('Abdul');

console.log('Before marrige', kuddus2);
console.log('After marrige', kuddusCopy);
