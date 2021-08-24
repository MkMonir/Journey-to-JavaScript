'use strict';

function calcAge (birthYear){
    const age = 2021 - birthYear;

    function print(){
        let output = `${firstName} is ${age} years old, born in ${birthYear}.`;
        console.log(output);

        if(birthYear >= 1990 && birthYear <= 2005){
            ///CREATING NEW VARIABLES WITH SAME NAME AS OUTER SCOPE'S VARIABLE
            const firstName = 'Ashik';
            ///REASSIGNING OUTER SCOP'S VARIBLE
            output = 'hello';
            console.log(output);

            const str = `hello ${firstName}!`;
            var pro = `hi ${firstName}`;
            console.log(str);

            function add(a,b){
                return a +b;
            }
            console.log(add(5,4));
        }
    }
    print();

    return age;
}
const firstName = 'Monir';
calcAge(2001);

