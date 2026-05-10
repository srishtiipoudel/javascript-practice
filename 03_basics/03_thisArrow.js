const user = {
  username: "srishti",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // gives current context of user
  },
};
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this); // gives current context of the node which is empty - {}

/*
before the engine that executes javascript was only found in browser,
now we have different engines which are named node, deno, etc i.e, we have standalone engines
so, in browser it gives window as output as window object is the global object
*/

function chai() {
  let username = "srishti";
  console.log(this.username); // output - undefined
  // this should be used inside objects
}
chai();

const chai = function () {
  let username = "srishti";
  console.log(this.username);
};
chai(); // gives same output

// arrow function
const chai = () => {
  let username = "srishti";
  console.log(this.username);
};
chai(); // gives same output

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));

// implecit return
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2); // while using () no need of return function
// while using {} we need to use return function
console.log(addTwo(3, 5));
