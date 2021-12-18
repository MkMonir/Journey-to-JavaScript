// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Bread', 6);
// console.log(ShoppingCart.totalPrice, ShoppingCart.shippingCost);

import add, { cart } from './shoppingCart.js';
add('pizza', 3);
add('bread', 6);
add('apple', 4);

console.log(cart);
