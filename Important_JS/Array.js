const arr = new Array(1, 2, 3, 4, 5)
const arr1 = [10, 20, 30, 40, 50]

arr.push(6) //Appends new elements to the end of an array
arr.pop() //Removes the last element from an array and returns it.

arr.unshift(0); // Add new elements in array at first
arr.shift() //Removes the first element from an array and returns it.

arr1.includes(5)
arr1.indexOf(10)

//slice , splice #IMPORTANT
arr.slice(0, 3) // It doesnot change/manipulate original array
arr.splice(0, 3) // It change original/manipulate array

const fruits = ["Apple", "Banana", "Mango"]
const vegetables = ["Potato", "Cauli", "Vindi"]
// fruits.push(vegetables);
// console.log(fruits); //[ 'Apple', 'Banana', 'Mango', [ 'Potato', 'Cauli', 'Vindi' ] ]

const allFoods = fruits.concat(vegetables);
console.log(allFoods); // [ 'Apple', 'Banana', 'Mango', 'Potato', 'Cauli', 'Vindi' ] : comment above push to get expected results.

// spread operator
const allNewFoods = [...fruits, ...vegetables]
console.log(allFoods); // [ 'Apple', 'Banana', 'Mango', 'Potato', 'Cauli', 'Vindi' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const anotherArrayUsable = anotherArray.flat(Infinity);
console.log(anotherArrayUsable); //  [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("Suman")); // false
console.log(Array.isArray([1, 2, 3, 5])); // true

//convert to array
console.log(Array.from("Suman")); //[ 'S', 'u', 'm', 'a', 'n' ]

let a = 100, b = 200, c = 300
console.log(Array.of(a, b, c)); //[ 100, 200, 300 ] Note: In the case of number we use of instead of from







