// for loop
/*
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
*/

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}
// console.log(element); // not allowed to access from outside of scope

for (let i = 1; i < 10; i++) {
  console.log(`Outer loop value: ${i}`);

  for (let j = 1; j < 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  // if index <= myArray.length then output - flash batman superman undefined
  const element = myArray[index];
  console.log(element);
}

// break & continue
for (let index = 0; index < 10; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break; // stops and exits from loop
  }
  console.log(`Value of i is ${index}`);
}

for (let index = 0; index < 10; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue; // skips for one time and continues loop
  }
  console.log(`Value of i is ${index}`);
}
