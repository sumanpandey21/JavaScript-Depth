
const programming = ["JS", "Python", "C", "C++", "Java"]


programming.forEach(function (item) {
    // console.log(item);

})
programming.forEach((item) => {
    // console.log(item);  
})

programming.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

function printMe(item) {
    // console.log(item);
}
programming.forEach(printMe)

const myCoding = [
    {
        languagaeName: "JavaScript",
        fileName: "js"
    },
    {
        languagaeName: "Java",
        fileName: "java"
    },
    {
        languagaeName: "Python",
        fileName: "py"
    }
];
myCoding.forEach((item) => {
    // console.log(item.languagaeName);

})