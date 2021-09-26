'use strict';

const airline = 'TAP Air Bangladesh';
const seat = 'A370';

console.log('A730'.length, 'A730'[0]);

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('e'));

console.log(airline.slice(6));
console.log(airline.slice(6, 10));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat😑');
  else console.log('You got lucky😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Kuddus'));
console.log(typeof new String('Kuddus'));
console.log(typeof new String('Kuddus').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

/// FIX CAPITALIZATION In NAME

const passenger = 'KUdDus';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

/// COMPARING EMAILS

const email = 'kuddus@gmail.com';
const loginEmail = '  KuDDus@gmail.COm';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// BUT WE CAN JUST DO THIS
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// REPLACHING
const priceUS = '122,23$';
const priceBD = priceUS.replace('$', 'Tk');
console.log(priceBD);

const announcment =
  'All passenger come to boarding door 23 . Boarding door 23!';
console.log(announcment.replace('door', 'gate'));
console.log(announcment.replaceAll('door', 'gate'));
console.log(announcment.replace(/door/g, 'gate'));

// BOLEANS
const plane = 'Airbus A320neo';
console.log(plane.includes('bus'));

console.log(plane.startsWith('Air'));
console.log(plane.endsWith('320'));

// PRACTICE EXERCISE
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed to board');
  } else {
    console.log('Welcome board');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/// SPLIT AND JOIN
console.log('a + vary + nice + string'.split('+'));
console.log('Kuddus Ali'.split(' '));

const [firstName, lastName] = 'Kuddus Ali'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // SOLUTION 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('ashiqur rahman rolin');
capitalizeName('kuddus ali');

/// PADDING TO STRINGS

const msg = 'Go to the gate 23';
console.log(msg.padStart(25, '👉🏿').padEnd(35, '👈🏿'));

const maskCreditCard = function (number) {
  const str = number + '';
  const lastDigit = str.slice(-4);
  return lastDigit.padStart(str.length, '*');
};
console.log(maskCreditCard(3333284904444445));
console.log(maskCreditCard('47205730233834'));
console.log(maskCreditCard(47387192));

/// REPEAT
const msg2 = 'Bad weather... All Departues Delayed...  ';
console.log(msg2.repeat(5));

const plansInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
plansInLine(5);
plansInLine(12);
plansInLine(8);
