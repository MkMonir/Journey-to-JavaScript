'strict';

const mark = {
    fullName : 'MarkMuller',
    mass : 78,
    height : 1.69,
    
    calcBmi : function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    fullName : 'JohnSmith',
    mass : 92,
    height : 1.95,
    
    calcBmi : function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

mark.calcBmi();
john.calcBmi();
//console.log(mark,john);

if(mark.BMI > john.BMI){
    console.log(
        `${mark.fullName}'s BMI (${mark.calcBmi()}) is higher then ${john.fullName}'s (${john.calcBmi()})`
    )
}else{
    console.log(
        `${john.fullName}'s BMI (${john.calcBmi()}) is higher then ${mark.fullName}'s (${mark.calcBmi()})`
    )
}


