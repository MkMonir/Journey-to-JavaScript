'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCopy = dogsJulia.slice();
  juliaCopy.splice(0, 1);
  juliaCopy.splice(-2);
  console.log(juliaCopy);

  const dogsBoth = juliaCopy.concat(dogsKate);
  console.log(dogsBoth);

  // const adultation = dogsBoth>=3?'adult':'puppy';

  dogsBoth.forEach(function (value, i) {
    if (value >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/// DATA 2
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
