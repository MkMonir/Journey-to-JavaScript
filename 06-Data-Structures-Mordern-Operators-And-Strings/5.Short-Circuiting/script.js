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

/// BOOLEAN LOGICAL OPERATORS CAN : USE ANY DATA TYPE, RETURN ANY DATA TYPE, SHORT CIRCUITING

///SHOR CIRCUITING WITH OR OPERATORS

console.log('-------OR-----');

/// OR OPERATORS WIll RETURN THE FIRST TRUTHY VALUE OF ALL THE OPERANDS ELSE THE LAST VALUE IF ALL OF THEM ARE FALSY

console.log(18 || false);
console.log(0 || 'Kuddus');
console.log(0 || true);
console.log('' || false);

// restaurant.numGuest = 25;

const guests1 = restaurant.numGuest ? restaurant.numGuest : 28;
console.log(guests1);

const guests2 = restaurant.numGuest || 50;
console.log(guests2);

///SHOR CIRCUITING WITH AND OPERATORS

/// AND OPERATORS WIll RETURN THE FIRST FALSE VALUE OF ALL THE OPERANDS ELSE THE LAST VALUE IF ALL OF THEM ARE TRUTHY

console.log('-------AND-----');

console.log(0 && 'KUDDUS');
console.log(13 && 'KUUDUS');

const guests3 = restaurant.numGuest && 25;
console.log(guests3);

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mashroom', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mashroom', 'Spinach');
