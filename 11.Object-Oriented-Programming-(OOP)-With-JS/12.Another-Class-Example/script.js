'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  // Public Interface
  diposite(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.diposite(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.diposite(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Ashik', 'BDT', 111);
acc1.diposite(200);
acc1.withdraw(145);
acc1.requestLoan(0);
console.log(acc1);
