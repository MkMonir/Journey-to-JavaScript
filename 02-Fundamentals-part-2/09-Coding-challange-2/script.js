'strict';


const caclTip = function(bill){
  const tip = bill >= 50 && bill <= 300 ? bill *15/100:
  bill *20/100;
  return tip;
}

const caclTip2 = function(bill){
  let tip;
  if(bill >= 50 && bill <= 300){
    tip = bill * 15/100;
  }else{
    tip = bill * 20/100;
  }
  return tip;
}

const bills = [125,555,44];
const tips = [caclTip(bills[0]),caclTip(bills[1]),caclTip(bills[2])];
console.log(bills);
console.log(tips);

const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(total);

// const tips2 = [caclTip2(bills[0]),caclTip2(bills[1]),caclTip2(bills[2])];
// console.log(tips2);