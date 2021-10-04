'use strict';

const calcAverage = function (ages) {
  let humanAge = [];
  const dogAge = ages.map((age, i) => {
    if (age <= 2) {
      return humanAge.push(2 * age);
    } else if (age > 2) {
      return humanAge.push(16 + age * 4);
    }
  });
  console.log(humanAge);
  const adultDogs = humanAge.filter(age => age >= 18);
  console.log(adultDogs);

  const averAgeDogAge = adultDogs.reduce(
    (acc, value, i, arr) => acc + value / arr.length,
    0
  );
  return averAgeDogAge;
};
const avg1 = calcAverage([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverage([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
