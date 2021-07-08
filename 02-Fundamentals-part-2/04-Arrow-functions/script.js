'strict';

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(2001,'Monir'));
console.log(yearsUntilRetirement(1992,'Ashik'));
console.log(yearsUntilRetirement(1997,'Kuddus'));
