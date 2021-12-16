'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/uganda`),
    getJSON(`https://restcountries.com/v3.1/name/vietnam`),
    getJSON(`https://restcountries.com/v3.1/name/india`),
  ]);
  console.log(res[0]);
})();

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took long time'));
    }, sec * 1000);
  });
};

// Promise.race
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/afghanistan`),
  timeOut(1),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Promise.all
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
