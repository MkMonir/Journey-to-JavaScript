'use strict';

const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6]]: {
    open: 11,
    close: 23,
  },
  [weekdays[0]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  ///FROM ES6 ENHANCED OBJECT LITERALS
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here your pasta with ${ing1} ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
/// OPTIONAL CHAINING START FROM ES2020

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours?.mon?.open);

// WITH OPTIONAL CHAINING
const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}.`);
}

// METHODS
console.log(restaurant.order?.(0, 1) ?? `Methods does not exist`);
console.log(restaurant.orderGuzz?.(0, 1) ?? `Methods does not exist`);

// ARRAYS

// WITH OPTIONAL CHAINING
const user = [
  {
    name: 'Kuddus',
    age: 21,
  },
];
console.log(user[0]?.name ?? 'User empty!');

// WITHOUT OPTIONAL CHAINING
if (user.length < 0) {
  console.log(user.name);
} else {
  console.log('User empty!');
}
