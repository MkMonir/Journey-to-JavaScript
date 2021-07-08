'strict';

function hello (){
    console.log('My name is Monir');
}

//calling //running //invoking function

hello();
hello();
hello();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(14,10);
console.log(appleOrangeJuice);

const num = Number("45");
console.log(num);