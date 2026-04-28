let score1 = 33;
let score2 = "33";
let score3 = "33abc";
let score4 = null;
let score5 = undefined;
let score6 = true;
let score7 = "srishti";

console.log(typeof score1);

let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);
let valueInNumber5 = Number(score5);
let valueInNumber6 = Number(score6);
let valueInNumber7 = Number(score7);

console.log(valueInNumber2);
console.log(typeof(valueInNumber2));

console.log(valueInNumber3);
console.log(typeof(valueInNumber3));

console.log(valueInNumber4);
console.log(typeof valueInNumber4);

console.log(valueInNumber5);
console.log(typeof valueInNumber5);

console.log(valueInNumber6);
console.log(typeof valueInNumber6);

console.log(valueInNumber7);
console.log(typeof valueInNumber7);

/*
"33" -> 33
"33abc" -> NaN
null -> 0
undefined -> NaN
true -> 1
false -> 0
*/

let isLoggedIn1 = 1;
let isLoggedIn2 = 0;
let isLoggedIn3 = "";
let isLoggedIn4 = "srishti";

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);

let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3);

let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(booleanIsLoggedIn4);

/*
1 -> true
0 -> false
"" -> false
"srishti" -> true
*/

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
