'use strict';

// Public Fields
// Private Fields
// Public Methods
// Private methods
// (there is also the static method)

class Account {
  // Public Fields(Instances)
  locale = navigator.language;

  // Private Fields(Instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected peoperty
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  diposite(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.diposite(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.diposite(val);
      console.log(`Loan approved`);
    }
  }

  static helper() {
    console.log('helper');
  }

  // Private Methods
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Ashik', 'BDT', 111);
// acc1._movements.push(29);
console.log(acc1.getMovements());
acc1.diposite(200);
acc1.withdraw(145);
acc1.requestLoan(0);
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
Account.helper();
