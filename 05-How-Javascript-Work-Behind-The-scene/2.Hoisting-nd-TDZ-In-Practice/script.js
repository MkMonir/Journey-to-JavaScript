'use strict';

///HOISTING WITH VARIABLES
console.log(hi);
// console.log(job);
// console.log(year);

var hi = 'Monir';
const job = 'student';
let year = 2001;

///HOISTING WITH FUNCTIONS
console.log(addDecl(2, 5));
// console.log(addExpr(2, 5));
// console.log(addArrow(2, 5));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//EXample
console.log(products);
///THESE STATEMENT WORK BECAUSE VAR IS NOW UNDEFIND
if (!products) {
  deletingShopingCard();

  var products = 20;

  function deletingShopingCard() {
    console.log('hello');
  }
}

let x = 1;
const y = 2;
var z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
