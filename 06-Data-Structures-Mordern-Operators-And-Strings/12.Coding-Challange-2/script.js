'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, names] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${names}`);

const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamstr}: ${odd}`);
}

//BONUS
const scored = game.scored;

const scorers = {
  [scored[0]]: 2,
  [scored[1]]: 1,
  [scored[3]]: 1,
};

console.log(scorers);
