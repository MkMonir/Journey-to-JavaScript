'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Render Country
const renderCountry = function (data, className = '') {
  const html = `
      <div class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${
              data.name.common === 'Bangladesh'
                ? data.languages.ben
                : data.languages.hin
            }</p>
            <p class="country__row"><span>💰</span>${
              data.name.common === 'Bangladesh'
                ? data.currencies.BDT.name
                : data.currencies.INR.name
            }</p>
          </div>
      </div>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// // Render error
// const renderError = function (err) {
//   countriesContainer.insertAdjacentText('beforeend', err);
//   // countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[5];

//       if (!neighbour) throw new Error(`No neighbour found!`);

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const whereAmI = function () {
  fetch(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=bfb9feb860b049cd8f218a0e8b02ec1e`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      console.log(data);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => console.error(`${err.message} 💥💥💥`));
};
whereAmI();
