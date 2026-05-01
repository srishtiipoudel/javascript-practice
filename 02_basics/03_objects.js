// objects can be declared in two ways; literals & constructor
// singleton - when object is declared using constructor
// Object.create;

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Srishti",
  "full name": "spspsp",
  [mySym]: "mykey1",
  age: 18,
  location: "Bharatpur",
  email: "srishti@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]); // prefered
// console.log(JsUser."full name"); // not allowed; so the above method is prefered
console.log(JsUser[mySym]);

JsUser.email = "srishti@chatgpt.com";
// Object.freeze(JsUser); // to not be able to change the value of object
JsUser.email = "srishti@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
