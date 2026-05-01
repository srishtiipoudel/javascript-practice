function sayMyName() {
  // function definition
  console.log("S");
  console.log("P");
}

sayMyName; // reference
sayMyName(); // execution

function addTwoNumbers(number1, number2) {
  // (number1, number2) - parameters
  console.log(number1 + number2);
}
addTwoNumbers(3, 4); // (3, 4) - arguments

function subTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}
const result = subTwoNumbers(4, 5);
console.log("Result: ", result);

function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage("Srishti"));
console.log(loginUserMessage("")); // Output:  just logged in
console.log(loginUserMessage()); // Output: undefined just logged in

function loginUserMessageTwo(username = "sam") {
  if (username === undefined) {
    // can also use (!username) instead of (username === undefined)
    console.log("Please eneter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessageTwo());

function calculateCartPrice(val1, val2, ...num1) {
  // ...num1 - rest operator
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

//Objects in function
const user = {
  username: "srishti",
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}
handleObject(user); // passing object inside function
handleObject({
  username: "sam",
  price: 399,
});

// Array in function
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray)); // passing array inside function
console.log(returnSecondValue([4, 6, 8, 3]));
