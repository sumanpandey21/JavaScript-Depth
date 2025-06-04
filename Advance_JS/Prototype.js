
// ✅ In JavaScript, almost everything is an object, including Arrays, Functions, and Strings.
let myHeros = ["thor", "spiderman"]

// Custom object with properties and a method
let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function () {
        // `this` refers to the current object (heroPower)
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// 🔁 Prototypes and Inheritance

// ✅ Adding a method to Object prototype
// This will be available to all objects (including arrays, strings, etc.)
Object.prototype.suman = function () {
    console.log(`Suman is present in all objects`);
}

// ✅ Adding a method only to Array prototype
// This will be available ONLY to arrays
Array.prototype.heySuman = function () {
    console.log(`Suman says hello.`);
}

// 🔍 Testing prototype methods
// heroPower.suman()         // ✅ Works: heroPower is an object
// myHeros.suman()           // ✅ Works: arrays are also objects
// myHeros.heySuman()        // ✅ Works: heySuman is added to Array prototype

// ❌ heroPower.heySuman()   // Error: heroPower is a plain object, not an array


// ------------------ Inheritance with Prototypes ------------------

const User = {
    name: "Example",
    email: "example@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport  // ✅ Inheriting from TeachingSupport (old syntax)
}

// 🧠 Now, TASupport can access isAvailable from TeachingSupport

// ✅ Creating inheritance chain
Teacher.__proto__ = User           // Old syntax: Teacher inherits from User

// ✅ Modern syntax (Recommended)
// Now, TeachingSupport inherits from Teacher, and Teacher from User
Object.setPrototypeOf(TeachingSupport, Teacher)

// 🔍 Prototype chain after setup:
// TASupport --> TeachingSupport --> Teacher --> User


// ------------------ String Prototype Extension ------------------

// Custom string with extra spaces
let anotherUsername = "SumanPandey     "

// ✅ Adding a method to String prototype
String.prototype.trueLength = function () {
    console.log(`${this}`);                       // Original string
    console.log(`True length is: ${this.trim().length}`)  // Trimmed string length
}

// 🧪 Testing the custom method
anotherUsername.trueLength();   // Output: true length after trimming spaces
"  Hello ".trueLength();        // Works on string literals too
"JavaScript".trueLength();      // Also works fine
