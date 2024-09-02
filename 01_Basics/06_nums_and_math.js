const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//
//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); // it give number after decimal

const a = 157.698
//console.log(a.toPrecision(3)); //The toPrecision() method formats a number to a specified length.

const b = 10000000
//console.log(b.toLocaleString('en-IN'));// The toLocaleString() method returns a Date object as a string, using locale settings  returns like this 1,00,00,000
// go to console and try Number.__ to see other properties like max,min,etc.



//*******************Math Libray ************************* ****/

console.log(Math);

// go to console check differnt math library Using Math.___ 
console.log(Math.round(5.8));

console.log(Math.ceil(4.1)); // upper value i.e 5
console.log(Math.floor(4.9)); // lower value i.e 4
console.log(Math.min(5,8,97,4));
console.log(Math.max(14,5,8,79));

console.log(Math.random()); // output range 0 to 1
console.log((Math.random()*10)+1); // it give output greater than 1
console.log(Math.floor(Math.random()*10)+1); // round off to lower value

// random number in range

const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max-min+1))+min);
// This is the formula.









