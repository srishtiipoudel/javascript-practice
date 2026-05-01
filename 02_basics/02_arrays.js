const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

marvelHeros.push(dcHeros); // pushed one array inside another
console.log(marvelHeros);
console.log(marvelHeros[3][1]); // to retrieve value when array is inside an array

const allHeros = marvelHeros.concat(dcHeros); // concatenation of second array into the first
console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]; // spreads the array
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity); //  depth of the array is given inside flat function
console.log(realAnotherArray);

console.log(Array.isArray("Srishti")); // checks if it's array or not
console.log(Array.from("Srishti")); // creates array from the given value; gives empty array if can't make array
console.log(Array.from({ name: "srishti" })); // can't decide from which to make array; keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // returns new array from set of elements
