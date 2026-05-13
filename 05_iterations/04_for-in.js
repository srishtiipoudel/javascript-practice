// for in loop - object, array
/*
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
}
*/
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(key); // keys
  // console.log(myObject[key]); // values
  console.log(`${key}: ${myObject[key]}`); // key: value
}

const programming = ["js", "rb", "py", "java", "cpp"]; // key of array is it's index
for (const key in programming) {
  console.log(key); // output - 0 1 2 3 4
  console.log(programming[key]);
}

// map cannot iterate in for in loop
