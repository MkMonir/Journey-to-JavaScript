'strict';

const monir = [
    'Monir',
    'Khan',
    2021-2001,
    'student',
    ['abbas','kuddus']
];

for(let i = monir.length - 1; i >= 0; i--){
    console.log(i, monir[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`starting exercise ${exercise}`);
    
    for(rep = 1; rep < 6; rep ++){
        console.log(`Exercise ${exercise} : lifting weight repetition ${rep}`);
    }
}