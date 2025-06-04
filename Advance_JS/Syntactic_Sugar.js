
/*
Syntactic sugar refers to syntax in a programming language that makes things easier to read or
express, but doesn't add new functionality — it just makes the code "sweeter" or more convenient
for humans to write and understand. 
*/

function Person1(name) {
    this.name = name;
}

Person1.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

// This is syntactic sugar for the older prototype-based way
class Person2 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const obj1 = new Person1("Suman");
obj1.greet();

const obj2 = new Person2("Pandey")
obj2.greet();