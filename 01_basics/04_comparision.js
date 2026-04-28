console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
equality check == and comparisions > < >= <= work differently
comparisons convert null to a number, treating it as a 0
that's why null >= 0 is true and null > 0 is false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === // checks datatype too

console.log("2" === 2);
