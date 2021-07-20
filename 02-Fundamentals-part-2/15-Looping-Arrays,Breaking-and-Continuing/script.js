'strict';



const monir = [
    'Monir',
    'Khan',
    2021-2001,
    'student',
    ['Kuddus','Mokles','Akkas'],
];

const types = [];

for(let i = 0; i < monir.length; i++){
    //Reading monir array
    console.log(monir[i]);

    ////Filling types array
    // types[i] = typeof monir[i];
    types.push(typeof monir[i]);
}

console.log(types);

const years = [1999,2001,1780,2005];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2021-years[i]);
}

console.log(ages);

////CONTINUE AND BREAK
console.log('-----CONTINUE WITH STRING--------')
for(let i = 0; i < monir.length; i++){

    if(typeof monir[i] !== 'string') continue;

    console.log(monir[i] ,typeof monir[i]);

}
console.log('-----BREAK WITH NUMBER-------')
for(let i = 0; i < monir.length; i++){

    if(typeof monir[i] === 'number') break;

    console.log(monir[i] ,typeof monir[i]);

}