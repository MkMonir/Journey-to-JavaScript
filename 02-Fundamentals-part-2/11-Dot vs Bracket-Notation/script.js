'strict';

const monir = {
  firstName : 'Monir',
  lastName: 'Khan',
  age : 2021 - 2001,
  friends : ['kuddus','manik','mokbul'],
};

console.log(monir);
console.log(monir.age);
console.log(monir['lastName']);

const namKey = 'Name';

console.log(monir['first' + namKey]);
console.log(monir['last' + namKey]);

const interastedIn = prompt('What do you want to know about Monir. choose between firstName,lastName,age,friends');

if(monir[interastedIn]){
  console.log(monir[interastedIn]);
}else{
  console.log('Wrong choose! choose between firstName,lastName,age,friends')
}

console.log(`${monir.firstName} has ${monir.friends.length} and his best friend called ${monir.friends[0]}`);