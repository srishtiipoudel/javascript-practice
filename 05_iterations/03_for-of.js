// for of loop - array, map
/*
for (const element of object) {
    
}
*/
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Maps - Map object holds key-value pairs and remembers the original insertion order of the keys
const map = new Map();
map.set("NP", "Nepal");
map.set("USA", "United States of America");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
  // [key, value] - destructure of array
  console.log(key, ":", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) {
  //   console.log(key, ":", value); // objects are not iterable in for of loop
}
