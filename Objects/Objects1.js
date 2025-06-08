const mySymbol = Symbol("key");

// object literals
const JSUser = {
    "Full name": "Suman Pandey",
    age: 21,
    email: "suman@gmail.com",
    [mySymbol]: "myKey", //This is the only way to embedd symbol with objects
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Tuesday"]
}
console.log(JSUser["Full name"]);
console.log(JSUser.age);
console.log(JSUser["email"])
console.log(JSUser[mySymbol]);

JSUser.email = "sumanpandey@gmail.com"; // modify objects key's value

// Object.freeze(JSUser) // after this the modification will not applied so we comment at this time

console.log(JSUser);

JSUser.greet = function () {
    console.log(`Hello ${this.name}`);

}
JSUser.greet()
console.log(JSUser.greet);

//-------------------------------------------
const obj ={
    username:"suman",
    password:"suman123",
    isLoggedIn:true
}
console.log(Object.keys(obj)); // It is returned an array of keys of obj
console.log(Object.values(obj)); //  It is returned an array of values of  obj





