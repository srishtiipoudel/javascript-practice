const name = "srishti";
const repoCount = 50;

console.log(name + repoCount + " Value");

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("srishti-sp-com");

console.log(gameName[0]); // finds the value at index 0
console.log(gameName.__proto__);

console.log(gameName.length); // total length of string
console.log(gameName.toUpperCase()); // changes to upper case
console.log(gameName.charAt(2)); // finds the character at index 2
console.log(gameName.indexOf("t")); // finds the index of character 't'

const newString = gameName.substring(0, 4); // goes from index 0 to 3
console.log(newString);

const anotherString = gameName.slice(1, 8); // for negative value it starts from reverse
console.log(anotherString);

const newStringOne = "   srishti   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // removes starting and end spaces

const url = "https://srishti.com/srishti%20spspsp";
console.log(url.replace("%20", "-")); // replaces the value with another value
console.log(url.includes("good")); // searches for the given value in url

console.log(gameName.split("-")); // splites the value based on given character
