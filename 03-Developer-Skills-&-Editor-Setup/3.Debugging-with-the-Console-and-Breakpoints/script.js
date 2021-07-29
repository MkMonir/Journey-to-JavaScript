'use strict';

const measureMonir = function () {
  const measuremnet = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius')),
    value: 10,

    ///THE PROMPT FUNCTION ALWAYS RETURN A STRING NO MATTER WHAT WE PUT THERE
  };
  // B) FIND THE PROBLEM

  console.table(measuremnet);

  const monir = measuremnet.value + 250;
  return monir;
};
// A) IDENTIFY
console.log(measureMonir());

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 4, 5]);
console.log(amplitudeNew);
