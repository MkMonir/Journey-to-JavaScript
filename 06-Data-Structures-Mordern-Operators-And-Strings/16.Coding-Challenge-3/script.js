'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
console.log(events[3]);
// 2.
gameEvents.delete(64);
// console.log(gameEvents);
// 3.
console.log(`An event happened, on 
average, every ${gameEvents.size / 90} minutes`);

// 4.
for (const [key, values] of gameEvents) {
  const str = key <= 45 ? 'First Half' : 'Second Half';
  console.log(`[${str}] ${key}: ${values}`);
}
