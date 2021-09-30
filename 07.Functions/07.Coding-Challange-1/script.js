'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const prom = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\nWrite option number`
      )
    );
    typeof prom === 'number' &&
      prom < this.options.length &&
      this.answers[prom]++;
    this.displayMsg();
    this.displayMsg('string');
  },
  displayMsg(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayMsg.call({ answers: data1 }, 'string');
poll.displayMsg.call({ answers: data2 }, 'string');
