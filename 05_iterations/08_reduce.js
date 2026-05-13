// reduce - executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element
const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);
console.log(myTotal);

const myTotal2 = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mob dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
