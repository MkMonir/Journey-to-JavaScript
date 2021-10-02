'use strict';

const securebooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = securebooking();

booker();
booker();

console.dir(booker);
