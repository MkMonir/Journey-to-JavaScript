'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const monir = new Person('Monir', 2001);
// console.log(jonas);

const kuddus = new Person('Kuddus', 2000);
const malik = new Person('Malik', 1999);
// console.log(kuddus, malik);

// console.log(kuddus instanceof Person);

///////////////////
// PROTOTYPES
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

malik.calcAge();

console.log(kuddus.__proto__);
console.log(kuddus.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(malik));
// .prototypeOfLinkedObjects

// Properties
Person.prototype.species = 'Homo Sapiens';
console.log(kuddus.species, monir.species);

console.log(kuddus.hasOwnProperty('firstName'));
console.log(kuddus.hasOwnProperty('species'));

////////////////////////
// PROTOTYPE INHERITANCE ON BUILT-IN OBJECTS
console.log(monir.__proto__);
// Object.prototype (Top of prototype chain)
console.log(monir.__proto__.__proto__);
console.log(monir.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// ARRAYS PROTOTYPE
const arr = [1, 2, 5, 4];
console.log(arr.__proto__);

const h1 = document.querySelector('h1');
console.dir(h1);
