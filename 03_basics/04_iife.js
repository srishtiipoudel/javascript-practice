// Immediately Invoked Function Expression (IIFE)
// sometimes global scope causes pollution from variables or declarations and to remove them we use iife

(function chai() {
  console.log(`DB CONNECTED`);
})(); // semi colon is important here to separate two iife

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("srishti");
