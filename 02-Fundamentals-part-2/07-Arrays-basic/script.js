'strict';

const friend1 = 'kuddus';
const friend2 = 'mokbul';
const friend3 = 'akkas';

const friends = ['kuddus', 'mokbul', 'akkas'];
console.log(friends);
friends[2]= 'monir';
console.log(friends);

const years = new Array(1999,1990,1867,1769);
console.log(years);

console.log(friends[1]);
console.log(friends[friends.length-3]);

//Exercise

const firstName = 'Monir';
const Monir = [firstName, 'Khan', 2021-2001, 'student'];
console.log(Monir);

const calcAge = function (birthyear){
  return 2021 - birthyear;
}
const year = [1902,1980,1790,1920];
const age1 = calcAge(year[1]);
const age2 = calcAge(year[0]);
const age3 = calcAge(year[year.length -2]);

console.log(age1,age2,age3);

const ages = [calcAge(year[2]),calcAge(year[0]),calcAge(year[year.length -1])];
console.log(ages);