'use strict';

//////////////////////
// CLASS DECLARATION
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // METHODS WILL BE ADDED TO .PROTOTYPE PROPERTY
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${this.name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const ali = new PersonCL('Ali Khan', 2005);
console.log(ali);
console.log(ali.age);
// console.log(ali.fullName);

const account = {
  name: 'Monir',
  movement: [290, 192, 100, 244],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    return this.movement.push(mov);
  },
};

console.log(account.latest);

account.latest = 500;
console.log(account.movement);
