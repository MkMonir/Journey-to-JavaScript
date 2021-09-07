'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here your pasta with ${ing1} ${ing2} and ${ing3}`);
  },
};

const arr = [8, 3, 7];
const badNewArr = [1, 2, 5, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const NewArr = [1, 2, 3, ...arr];
console.log(NewArr);

const newMenu = [...restaurant.mainMenu, 'Berger'];
console.log(newMenu);
// console.log(restaurant.mainMenu);

////COPIYNG ARRAY
const mainMenuCopy = [...restaurant.mainMenu];
///COPIYNG 2 ARRAYS

const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu);

//ITERABLES: ARRAYS, STRINGS, MAPS, SETS. BUT NOT OBJECTS

const str = 'Kuddus';
const letters = [...str, ' ', 'Khan'];
console.log(letters);
console.log(...str);

const inredients = [
  // prompt(`let's make pasta! Inredient 1?`),
  // prompt(`Inredient 2?`),
  // prompt(`Inredient 3?`),
];
// console.log(inredients);
// restaurant.orderPasta(inredients[0], inredients[1], inredients[2]);
restaurant.orderPasta(...inredients);

//SPREAD OPERATORS ALSO WORK ON OBJECTS SINCE ES2018
const newRestaurent = { foundeIn: 2020, ...restaurant, founder: 'Ashik' };
console.log(newRestaurent);

const resaurentCopy = { ...restaurant };
resaurentCopy.name = 'Kuddus ALi';
console.log(resaurentCopy.name);
console.log(restaurant.name);
