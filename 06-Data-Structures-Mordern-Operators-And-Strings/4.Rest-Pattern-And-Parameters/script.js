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
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// 1) DISTRUCTURING

///SPREAD BECUASE ON RIGHT SIDE OF = SIGN
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

///SPREAD BECUASE ON LEFT SIDE OF = SIGN
const [b, a, ...others] = [1, 4, 3, 6, 8];
console.log(b, a, others);

const [Focaccia, Bruschetta, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(Focaccia, Bruschetta, otherFood);

///OBJECTS
const { fri, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 5, 2, 5);
add(2, 5, 2, 5, 8);
add(3, 5, 1, 8, 5, 4, 0, 2);

const x = [1, 2, 3];
add(...x);

restaurant.orderPizza('mashroom', 'Onion', 'Spinach');
restaurant.orderPizza('Mashroom');
