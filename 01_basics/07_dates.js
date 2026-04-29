let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // object

let myCreatedDate1 = new Date(2026, 0, 26);
let myCreatedDate2 = new Date(2026, 0, 26, 6, 30);
let myCreatedDate3 = new Date("2026-01-15");
let myCreatedDate4 = new Date("01-15-2026");

console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", {
  weekday: "long",
});
