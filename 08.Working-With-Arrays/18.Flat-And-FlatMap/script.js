// BANKIST APP

// Data
const account1 = {
  owner: 'Monir Khan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Ashikur Rahman Rolin',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Moqbul Haq',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Kuddus Ali',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FLAT METHOD
// THE FLAT MAETHOD ONLY CAN GO 1 LAVEL OF NESTED ARRAYS without giving Any death values
const arr = [[1, 2, 4], [9, 1, 3], 8, 0];

console.log(arr.flat());
// console.log(...arr.flat());

const arrDeepNested = [[1, [2, 4]], [[9, 1], 3], 8, 0];
console.log(arrDeepNested.flat(2));

const overallBalance = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance);

// FlatMap Method
const overallBalance2 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance2);
