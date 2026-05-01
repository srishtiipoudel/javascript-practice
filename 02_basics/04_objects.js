// const tinderUser = new Object() // singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "srishti",
      lastname: "spspsp",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
const obj4 = Object.assign(obj1, obj2); // Object.assign(target, source)
const obj5 = Object.assign({}, obj1, obj2);
const obj6 = { ...obj1, ...obj2 };

console.log(obj4);
console.log(obj5);
console.log(obj6);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 2,
    email: "p@gmail.com",
  },
  {
    id: 3,
    email: "sp@gmail.com",
  },
];

console.log(users[1].email);

console.log(Object.keys(tinderUser)); // output is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// destructure
const course = {
  coursename: "Javascript",
  price: "999",
  courseInstructor: "srishti",
};

// course.courseInstructor;

const { courseInstructor: instructor } = course;
console.log(instructor);

// JSON API introduction
// {
//     "name": "srishti",
//     "coursename": "Javascript",
//     "price": "free"
// }
