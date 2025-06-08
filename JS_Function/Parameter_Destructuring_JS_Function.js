
// Object Destructuring in Function Parameters

function printUser({ name, age }) {

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

const user = { name: "Alice", age: 25, country: "USA" };
printUser(user);


// Array Destructuring in Function Parameters

function showCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}

const point = [10, 20];
showCoordinates(point);


// Destructuring with Default Values

function greet({ name = "Guest", age = 18 } = {}) {

    // The default parameter = {} prevents an error if the function is called with no argument.
    // Inside the destructuring, name and age have default values.
    
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet(); // Uses defaults
greet({ name: "Bob" }); // age will be 18



// Nested Destructuring in Parameters

function displayInfo({ name, address: { city, country } }) {
  console.log(`${name} lives in ${city}, ${country}`);
}

const person = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  }
};

displayInfo(person);
