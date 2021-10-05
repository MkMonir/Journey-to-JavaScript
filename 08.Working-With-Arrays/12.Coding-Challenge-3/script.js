'use strict';

// const calcAverage = function (ages) {
//   // let humanAge = [];
//   // const dogAge = ages.map((age, i) => {
//   //   if (age <= 2) {
//   //     return humanAge.push(2 * age);
//   //   } else if (age > 2) {
//   //     return humanAge.push(16 + age * 4);
//   //   }
//   // });

//   console.log(humanAge);
//   const adultDogs = humanAge.filter(age => age >= 18);
//   console.log(adultDogs);

//   const averAgeDogAge = adultDogs.reduce(
//     (acc, value, i, arr) => acc + value / arr.length,
//     0
//   );
//   return averAgeDogAge;
// };

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
