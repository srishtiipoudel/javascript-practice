let a = 300; // global scope - it can be accessed inside block scope

if (true) {
  let a = 10; // block scope - it cannot be accessed outside of block scope
  const b = 20;
  var c = 30;
  console.log("INNER: ", a);
}
console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "srishti";
  function two() {
    const website = "youtube";
    console.log(username); // This works (Child can access Parent)
  }
  // console.log(website); // This would error (Parent cannot access Child)
  two();
}
one();

if (true) {
  const username = "srishti";
  if (username === "srishti") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// different ways to declare function
// addOne(5); // can access this before declaration
function addOne(num) {
  return num + 1;
}
addOne(5);

// addTwo(5); // cannot access this before declaration
const addTwo = function (num) {
  //sometimes also called expression
  return num + 2;
};
addTwo(5);
