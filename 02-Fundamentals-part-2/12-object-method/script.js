'strict';

const monir = {
    firstName : 'Monir',
    lastName: 'Khan',
    birthYear : 2001,
    job: 'student',
    friends : ['kuddus','manik','mokbul'],
    hasDrivingLisence : false,
    
//    calcAge : function(birthyear){
//        return 2021 - birthyear;
//    }
    
//    calcAge : function(){
//        console.log(this);
//        return 2021 - this.birthYear;
//    }
    
    calcAge : function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    
    getSummery : function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.hasDrivingLisence ? 'a': 'no'} driving lisence`;
    }
};

console.log(monir.calcAge());

console.log(monir.age);
console.log(monir.age);
console.log(monir.age);

console.log(monir.getSummery());

//console.log(monir['calcAge'](2001));