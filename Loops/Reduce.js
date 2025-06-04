const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const number = numbers.reduce((acc, currVal) => {
//     return acc + currVal;
// }, 0)
const number = numbers.reduce((acc, currVal) => acc + currVal, 0)

console.log(number);

