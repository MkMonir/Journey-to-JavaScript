'strict';

function wonTrophys(trophy){
    return trophy * 5;
}

function trophyType(silver,gold){
    console.log(silver,gold);

    const silverTrophys = wonTrophys(silver);
    const goldTrophys = wonTrophys(gold);

    const juice = `Ashik won ${goldTrophys} pieces of gold trophys and ${silverTrophys} pieces of silver trophys`;
    return juice;
}

console.log(trophyType(3,2));

// const fruits = fruitProcessor(2,3);
// console.log(fruits);