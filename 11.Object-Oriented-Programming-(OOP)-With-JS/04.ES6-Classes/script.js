'use strict';

// CLASS EXPRESSION
// const PersonCL  = class{
// }

//////////////////////
// CLASS DECLARATION
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // METHODS WILL BE ADDED TO .PROTOTYPE PROPERTY
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const ali = new PersonCL('Ali', 2005);
console.log(ali);

ali.calcAge();

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
ali.greet();
console.log(ali.__proto__ === PersonCL.prototype);

// 1) Classes are not hoisted even it class declaration
// 2) Classes are first-class citizes
// 3) Classes are executed in strict mode
