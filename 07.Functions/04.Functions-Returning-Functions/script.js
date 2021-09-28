'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeters = greet('Hey');
greeters('Kuddus');
greet('Hey')('Ali');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Ashik');
