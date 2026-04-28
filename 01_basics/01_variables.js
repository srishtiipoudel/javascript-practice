const accountId = 144553;
let accountEmail = "srishti@gmail.com";
var accountPassword = "12345";
accountCity = "Bharatpur";
let accountState;

// accountId = 2 // not allowed

accountEmail = "sp@sp.com";
accountPassword = "21212121";
accountCity = "Kathmandu";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
