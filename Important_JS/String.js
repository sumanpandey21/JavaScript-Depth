const str = "Suman"
console.log(str.substring(0, 4));

const url = "https://suman/suman%20pandey/"
console.log(url.replace('%20', '-'));

console.log(url.includes("suma"));


const orginalStr = "Suman";
const reversedStr = orginalStr.split('').reverse().join('');
console.log(reversedStr);
