// Number
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); // converts to string
console.log(balance.toString().length); // can check length by converting to string

console.log(balance.toFixed(2)); // gives fixed amount of decimal points

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // returns string

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // adds commas

// Maths
console.log(Math);
console.log(Math.abs(-4)); // changes negative value to positive value
console.log(Math.round(4.6)); // rounding off
console.log(Math.ceil(4.2)); // ceiling value
console.log(Math.floor(4.9)); // floor value
console.log(Math.min(4, 3, 6, 8)); // minimum value
console.log(Math.max(4, 3, 6, 8)); // maximum value
console.log(Math.random()); // random value
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
