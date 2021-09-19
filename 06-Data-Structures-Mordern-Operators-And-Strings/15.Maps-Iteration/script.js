'use strict';

const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

const openingHours = {
  [weekdays[5]]: {
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

const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct🎉'],
  [false, 'Wrong answer🥴'],
]);
console.log(question);

/// CONVERT OBJECT TO MAP
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

/// QUIZ APP
console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('Correct') === answer));

////CONVER ARRAYS TO MAP
console.log([...question]);

/// MAPS METHODS
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
