const username = (user) => {
    return `Welcome ${user}`
}
console.log(username("Suman"));

// Implicit return , it is only possible on one line statement
const userName1 = (user) => `Welcome ${user}`
console.log(userName1("Suman"));

// Implicit return , another way
const userName2 = (user) => (`Welcome ${user}`)
console.log(userName2("Suman"));


// Implicit return of objects
const obj = () => ({ username: "Suman" })
console.log(obj());

const sum = (num1, num2) => num1 + num2

console.log(sum(5, 6));
