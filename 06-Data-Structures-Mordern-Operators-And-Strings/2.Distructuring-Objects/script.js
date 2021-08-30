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
  orderDelivary: function ({
    starterIndex = 2,
    mainIndex = 0,
    time = '21:00',
    address,
  }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will delivered to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivary({
  time: '22:00',
  address: 'Pizza hutt',
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivary({
  address: 'Foodpanda',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categorie: tags = 5,
} = restaurant;
console.log(restaurantName, hours, tags);

////DEFAULT VARIABLES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

////MUTATING VARIABLES
let a = 12;
let b = 56;
const obj = { a: 23, b: 45, c: 34 };
({ a, b } = obj);
console.log(a, b);

///NESTED OBJECT VARIABLES
const {
  sat: { opens: o = [], close: c = 5 },
} = openingHours;
console.log(o, c);
