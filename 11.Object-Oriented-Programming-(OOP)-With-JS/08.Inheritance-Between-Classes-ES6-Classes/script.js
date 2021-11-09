'use strict';

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

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    // ALWAYS NEEDS TO HAPPEN FIRST!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2021 - this.birthYear} years old but`);
  }
}
const kuddus = new StudentCL('Kuddus Ali', 2001, 'Computer Course');
kuddus.introduce();
kuddus.calcAge();
