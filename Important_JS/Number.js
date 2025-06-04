const balance = new Number(100.53634623)
console.log(balance);

console.log(balance.toString().length); //12
console.log(balance.toFixed(2)); //100.54

const anotherNum = 123.868
console.log(anotherNum.toPrecision(3)); // output: 124
console.log(anotherNum.toPrecision(4)); // output: 123.9

const hundres = 10000000;
console.log(hundres.toLocaleString('en-IN')); //output:1,00,00,000 

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.EPSILON);








