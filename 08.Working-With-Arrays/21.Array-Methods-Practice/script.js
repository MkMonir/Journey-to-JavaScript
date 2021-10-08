'use strict';

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

// Exercise - 1
const bankDepositeSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositeSum);

const bankWithdrawalSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov < 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankWithdrawalSum);

// Exercise - 2
// const numDeposites1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposites1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposites1000);

// Exercise - 3

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// EXERCISE 4

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = [
    'a',
    'an',
    'but',
    'the ',
    'and',
    'or',
    'with',
    'on',
    'in',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(cur => (exceptions.includes(cur) ? cur : capitalize(cur)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONg title but not to long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
