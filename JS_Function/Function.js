function calculateCartPrice(...num1) { // ...is rest operator
    return num1;
}
console.log(calculateCartPrice(100, 200, 300)); //[ 100, 200, 300 ]

// function with objects
const user = {
    username: "Suman",
    age: 21
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user);
handleObject({
    username: "Sam",
    age: 27
})

//function with array
const arr = [10, 20, 30, 40];
function playWithArray(paramaArr) {
    return paramaArr;
}

console.log(playWithArray(arr));
