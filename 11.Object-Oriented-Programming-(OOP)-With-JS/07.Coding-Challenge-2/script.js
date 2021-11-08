'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    // console.log(speed);
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  get sppedUs() {
    return this.speed / 1.6;
  }

  set sppedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);

console.log(ford.sppedUs);
ford.accelerate();
ford.brake();
ford.sppedUs = 50;
console.log(ford);
