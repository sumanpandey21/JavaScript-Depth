//singleton : create a object using constructor
const user = {}

user.id = "101"
user.name = "Suman"
user.isLoggedIn = false

// console.log(user["id"]);
// console.log(user);

const regularUser = {
    email: "example@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Suman",
            lastname: "Pandey"
        }
    }
}
// console.log(regularUser.fullname?.userFullName.firstname); // ? is to check fullname is exist or not

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// Merge/combine objects 
const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// Merge/combine objects using spread operator
const obj4 = { ...obj1, ...obj2 } // almost this is used
// console.log(obj4);

// Destructutring of objects

const course = {
    coursename: "JS backend",
    price: "9999",
    courseInstructor: "Suman"
}
const { courseInstructor, coursename } = course;
console.log(courseInstructor, coursename);

// How can I assign this objects data with another variable
const { courseInstructor: instructor, coursename: anotherName, price: mulya } = course;
console.log(instructor, anotherName, mulya);
