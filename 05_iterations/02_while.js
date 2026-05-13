// while loop - checks the condition then runs the loop
/*
while (condition) {
    
}
*/

// do while loop - runs the loop atleast one time then checks the condition
/*
do {
    
} while (condition);
*/

let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 1; // if score = 11 here then output - Score is 11
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
