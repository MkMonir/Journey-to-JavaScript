/*let js = "amazing";
console.log(66+55-5+5);

let firstName = "Monir";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let $myName = "Khan Shaheb";
console.log($myName);
let myFirstJob = 'Sales man';
if (myFirstJob === 'Sales man') alert('Javascript is amazing');     */

/*let javscripIsFun = true;
console.log(javscripIsFun);

console.log(typeof true);
console.log(typeof javscripIsFun);
console.log(typeof 54);
console.log(typeof 'monir');

javscripIsFun = 'fun';
console.log(typeof javscripIsFun);*/
/*
const birthDay = 1991;
console.log(birthDay);
//birthDay = 1992;
//const Monir;
var myJob = 'coding';
myJob = 'true';
console.log(typeof myJob);
console.log(myJob);   */    

/*
///////math operators

const now = 2020;
const ageMonir = now - 2001;
const ageAshik = now - 1995;
console.log(ageMonir,ageAshik);

console.log(ageMonir * 2, ageAshik / 5, 3 **3);

const firstName = 'MOnir';
const lastName = 'Khan';

console.log(firstName + ' ' +lastName);
let x = firstName + ' ' + lastName;
console.log(x);               

/////Assignment operators
let m = 25+5;
m += 10;
m *=5;
m++;
m--;
m--;
console.log(m);

//comparison operators
console.log(ageMonir > ageAshik);
console.log(ageMonir < ageAshik);
console.log(ageMonir >= 19);
console.log(ageMonir <= 10);            


const now = 2020;
const ageMonir = now - 2001;
const ageAshik = now - 1995;

const averageAge = (ageMonir + ageAshik) / 2;
console.log(ageAshik,ageMonir,averageAge);      */

/*
//////Chalange 1

// const massMark = 78;
// const heightMark = 1.69;
// const massjohn = 92;
// const heightjohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massjohn = 85;
const heightjohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massjohn / (heightjohn * heightjohn);
console.log(BMIMark,BMIJohn);

const markHigherBmi = BMIMark > BMIJohn;
console.log(markHigherBmi);
console.log(typeof markHigherBmi);      */

/*
///////Strings and Template Literals
const firstName = 'monir';
const job = 'student';
const birthYear = 2001;
const currentYear = 2021;

const monir = "I'm " + firstName + ', a ' + (currentYear-birthYear) + ' years old ' + job + '!';
console.log(monir);

const monirNew = `i'm ${firstName}, a ${currentYear-birthYear} years old ${job} !`;
console.log(monirNew);

console.log('my \n\
name \n\
is \n\
monir');

console.log(`my
name
is
monir`);                */

/*
///// Taking Decisions if  else Statements
const age = 19;
const isOldEnough = age >= 21;

if(isOldEnough){
   console.log('Ashik can get married now ????????');
} else {
    const yearsLeft= 21 -age;
    console.log(`Ashik is too young wait another ${yearsLeft} years ????????`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2002){
    century = 20;
} else{
    century = 21;
}
console.log(century);      */

/*
///coding chalange 2

// const massMark = 78;
// const heightMark = 1.69;
// const massjohn = 92;
// const heightjohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massjohn = 85;
const heightjohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massjohn / (heightjohn * heightjohn);
console.log(BMIMark,BMIJohn);


if(BMIMark > BMIJohn){
    console.log(`marks's ${BMIMark} is higher then jon's ${BMIJohn}`)
}
else{
    console.log(`jhon's ${BMIJohn} is higher then mark's ${BMIMark}`)
}           */

/*
///////Type Conversion
const inputYear = '1991';
console.log(Number(inputYear) + 20);
console.log(inputYear + 20);

console.log(Number("Monir"));

console.log(30 + 20);
console.log(String(30) + 20);

console.log(Number(true));

///////Type Coercion
console.log('20' + '19' - 10) //'20' + '19'= 2019 -10 = 2009

console.log('201' - '28' - '30');
console.log('201' * '28' - '30');
console.log('201' / '28');

let n = '10' + 20;
n = n - '20';

console.log(n);    */    

/*
////Truthy and Falsy values

////5 falsy values 0, undefined, '', null, NaN without this values all are truthy values

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(Number('Monir')));

const monir = 0;

if(monir){
    console.log("Monir is elder then Ashik")
}
else{
    console.log("Ashik is elder then Monir")
}

// let height;

// if(height){
//     console.log("height is defined")
// }
// else{
//     console.log("height is undefined")
// }

let height = '';

if(height){
    console.log("height is defined")
}
else{
    console.log("height is undefined")
}           */

/*
/////Equality operators ==  vs =====

//// strict equality operator(===),
//// loose equality operator(==),
//// The difference between strict and loose operator is strict operators can't do type coercion.
//// But we need to avoid using loose operators bcz it's hard to find bugs and others problem

//// different operator (!==)

const age = '18';
if(age === 18) console.log("i just become an adult (strict)");

if(age == 18) console.log("i just become an adult (loose)");

const favourite = Number(prompt("what is your favourite per"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 25){
    console.log("25 is an amazing number");
}else if(favourite === 9){
    console.log("9 is also an amazing number");
}
else{
    console.log("it's not 25 or 9");
}

if(favourite !== 25){
    console.log("why not 25")
}                                          */


////Boolean logical operators

const hasDriversLisence = false;
const hasGoodVision = true;
const isTried = true;

console.log(hasDriversLisence && hasGoodVision);
// console.log(hasDriversLisence || hasGoodVision || isTried);

if(hasDriversLisence && hasGoodVision || isTried){
    console.log("Ashik can drive");
}else{
    console.log("Someone need to drive");
}

if(hasDriversLisence && hasGoodVision || isTried && !isTried){
    console.log("Ashik can drive");
}else{
    console.log("Someone need to drive");
}                            

/*
////Coding chalange 3

// const scoreDolphin = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 89 + 110) / 3;
// console.log(scoreDolphin,scoreKoalas);

// if(scoreDolphin > scoreKoalas){
//     console.log("Dolphin is win ");
// }else if(scoreKoalas > scoreDolphin){
//     console.log("koalas is win ");
// }else if(scoreDolphin === scoreKoalas){
//     console.log("Both are wins");
// }

//Bonus 1 and 2

const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphin,scoreKoalas);

if(scoreDolphin > scoreKoalas && scoreDolphin >= 100){
    console.log("Dolphin is win ");
}else if(scoreKoalas > scoreDolphin &&  scoreKoalas >= 100){
    console.log("koalas is win ");
}else if(scoreDolphin === scoreKoalas && scoreDolphin >= 100 && scoreKoalas >= 100){
    console.log("Both are wins");
}else{
    console.log("No one wins the trophy");
}                                               */

/*
//////Switch statement

const day = "satarday";

switch(day){
    case 'monday':
        console.log("creating something new");
        break
    case 'tuesday':
        console.log("doing coding practice");
        break
    case 'wednesday':
    case 'thursday':
        console.log("doing fun with new feateres");
        break
    case 'friday':
    case 'satarday':
        console.log("enjoy the weekend");
        break
    default:
        console.log("not a valid day");
}

if(day === "monday"){
    console.log("creating something new");
}else if(day === "tuesday"){
    console.log("doing coding practice");
}else if(day === "wednesday" ||  day === "thursday"){
    console.log("doing fun with new feateres");
}else if(day === "friday" || day === "satarday"){
    console.log("enjoy the weekend");
}else{
    console.log("not a valid day");
}                                                         */

/*
/////Expressions and statement

///Defference between expresssion and statement is expressions produce any values but satement produce a variables or sentence

25 + 30 ///thats a expression bcz it produce a value
true && false //thats a expression

const age = 20; ///thats a statement                    */

/*
/////Conditional ternary operators
const age = 20;

age >=21 ? console.log("I like to drink wine ????"):
            console.log("I like to drink water ????");

const drink = age >= 20 ? 'wine????': 'water????';
console.log(drink);

let drink2;
if(age >=219){
    drink2 = 'wine????';
}else{
    drink2 = 'water????';
}
console.log(drink2);

console.log(`I like to drink ${drink2}`);           */

/////Challange 4

// const bill = 40;
// const tip = bill >=50 && bill <=300 ? bill * 15 /100: bill * 20 /100;
// console .log(`The bill was ${bill}, the tip was ${tip}, and the total bill was ${bill + tip}`);

// if(bill >=50 && bill <=300){
//     const tip2 = bill * 15/100;
//     const total = bill + tip2;
//     console.log(bill,tip2,total);
// }else{
//     const tip2 = bill * 20/100;
//     const total = bill + tip2;
//     console.log(bill,tip2, total);
// }
