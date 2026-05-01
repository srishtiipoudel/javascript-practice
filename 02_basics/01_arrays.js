const myArr1 = [0, 1, 2, 3, 4, 5];
const myHeros = ["iron man", "hulk", "thor"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr1[1]);

// array methods
myArr1.push(6); // pushes the value at the end of array
myArr1.push(7);
myArr1.pop(); // removes the end value from array
myArr1.unshift(9); // adds value at the start of array and shifts other values to the right
myArr1.shift(); // removes the value at the start of array and shifts other values to the left

console.log(myArr1);

console.log(myArr1.includes(9)); // checks if the value is present in the array
console.log(myArr1.indexOf(9)); // gives -1 as output if there is no such value present

const newArray = myArr1.join(); // binds the array and also converts it to string
console.log(myArr1);
console.log(newArray);
console.log(typeof newArray); // string

// slice, splice
console.log("A ", myArr1);

const mna1 = myArr1.slice(1, 3); // goes from index 1 to 2 and does not manipulate original array
console.log(mna1);
console.log("B ", myArr1);

const mna2 = myArr1.splice(1, 3); // goes from index 1 to 3 and manipulates original array
console.log(mna2);
console.log("C ", myArr1);
