'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');

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

// Render error
const renderError = function (err) {
  countriesContainer.insertAdjacentText('beforeend', err);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  // Reverse Geocoding
  try {
    const resGeo = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=bfb9feb860b049cd8f218a0e8b02ec1e`
    );

    if (!resGeo.ok)
      throw new Error(`Problem getting location data
    `);

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Get countrydata
    const res =
      await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}
`);

    if (!res.ok)
      throw new Error(`Problem getting country
    `);

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};

whereAmI();
console.log('Lol');

// Error handling with try
// try {
//   let x = 0;
//   const y = 5;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
