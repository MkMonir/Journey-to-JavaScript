'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Monir', 2001);
console.log(jonas);

// Constructor functios do 4 things
// 1) Create a empty object {}
// 2) Function is called and this keyword = created empty object{}
// 3) {} Linked to prototype
// 4) Function automaticly return created object{}

const kuddus = new Person('Kuddus', 2000);
const malik = new Person('Malik', 1999);
console.log(kuddus, malik);

console.log(kuddus instanceof Person);
