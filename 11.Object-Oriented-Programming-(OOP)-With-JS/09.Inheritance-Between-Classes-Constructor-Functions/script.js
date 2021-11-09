'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// METHODS WILL BE ADDED TO .PROTOTYPE PROPERTY
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am study ${this.course}`);
};

const kuddus = new Student('Kuddus', 2001, 'Computer Science');
kuddus.introduce();
kuddus.calcAge();

Student.prototype.constructor = Student;
console.log(kuddus.__proto__);
console.dir(Student.prototype.constructor);
