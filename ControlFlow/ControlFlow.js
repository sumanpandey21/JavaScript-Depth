// Check empty array or not 
const emptyArray = []
if (emptyArray.length == 0) {
    console.log("Array is empty");

}

//Check empty object or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    // Object.keys(emptyObj): this is return an array
    console.log("Object is empty.");

}

const obj = {
    username: "suman",
    password: "suman123",
    isLoggedIn: true
}
console.log(Object.keys(obj)); // It is returned an array of keys
console.log(Object.values(obj)); //  It is returned an array of values


// Nullish Coalesing Operator(??): null undefined
let val1 = undefined ?? 5 // 5
let val2 = null ?? 10 //10
let val3 = add() ?? null // null

function add() {
    let a = 5, b = 6, sum = null
    sum = a + b
}