'use strict';

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const kuddus = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName}, I am study ${this.course}`);
};

const ashik = Object.create(StudentProto);

ashik.init('Ashik', 2001, 'Computer Science');
ashik.calcAge();
ashik.introduce();
