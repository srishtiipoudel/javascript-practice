// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 1234567890987654321n;

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = [
  "iron man",
  "hulk",
  "captain america",
  "thor",
  "hawkeye",
  "black widow",
];

let myObj = {
  name: "srishti",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

/* 
string -> String
number -> Number
number with decimals -> Number
boolean -> Boolean
null -> Object
undefined -> Undefined
symbol -> Symbol
bigint -> BigInt
array -> Array
object -> Object
function -> Function Object
*/

// Memory
// Stack (Primitive), Heap (Non Primitive)

let myYoutubeName = "srishti";
let anotherName = myYoutubeName;
anotherName = "spspsp";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "srishti@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
