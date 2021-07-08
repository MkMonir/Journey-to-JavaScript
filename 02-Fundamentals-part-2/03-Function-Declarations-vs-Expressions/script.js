'strict';

///Defferent between these to functions is Function declration can call the function before it defined but expression can't!!

///Function declaration
function calcAge1 (birthYear){
    return 2021 - birthYear;
}

const age1 = calcAge1(2001);
////Function Expression

const calcAge2 = function(birthYear){
    return 2021 - birthYear;
}

const age2 = calcAge2(2001);
console.log(age1,age2);
