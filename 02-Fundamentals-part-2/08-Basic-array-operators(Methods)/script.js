'strict';

const friends = ['mokles','kuddus','akbar','abbas'];

//Add Elements
const hello = friends.push('titu','kalam');
console.log(friends);
console.log(hello);

friends.unshift('mia');
console.log(friends);

//Remove Elements
friends.pop();
console.log(friends);

const popped = friends.pop();
console.log(popped);

friends.shift();
console.log(friends);

const popped2 = friends.shift();
console.log(popped2);

console.log(friends);
console.log(friends.indexOf('kuddus'));
console.log(friends.indexOf('Monir'));

console.log(friends.includes('kuddus'));
console.log(friends.includes('Monir'));

friends.push(21);
console.log(friends.includes(21));
console.log(friends.includes('21'));

if(friends.includes('abbas')){
  console.log('you have a friend called Abbas');
}