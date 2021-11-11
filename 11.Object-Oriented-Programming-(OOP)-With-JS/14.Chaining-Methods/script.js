'use strict';

class Account {
  locale = navigator.language;

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected peoperty
    this.#pin = pin;
  }

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  diposite(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.diposite(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.diposite(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('helper');
  }
}

const acc1 = new Account('Ashik', 'BDT', 111);
// acc1._movements.push(29);
console.log(acc1.getMovements());
acc1.diposite(200);
acc1.withdraw(145);
acc1.requestLoan(0);
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);

acc1.diposite(130).diposite(500).withdraw(400).requestLoan(4000).diposite(400);
console.log(acc1.getMovements());
