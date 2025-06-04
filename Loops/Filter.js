const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterNumbers1 = numbers.filter((number) => number > 5)

const filterNumbers2 = numbers.filter((number) => {
    return number > 5;
})

// console.log(filterNumbers);

const newnum = []
numbers.forEach((num) => {
    newnum.push(num)
})
// console.log(newnum);


const books = [
    { title: "Book One", Genre: "History", publish: "2002", edition: "2022" },
    { title: "Book History Two", Genre: "History", publish: "2005", edition: "2020" },
    { title: "Book Two", Genre: "Politics", publish: "2005", edition: "2023" },
    { title: "Book Three", Genre: "Economics", publish: "2007", edition: "2018" },
    { title: "Book Four", Genre: "Science", publish: "2010", edition: "2025" }

];
const userBooks = books.filter((book) => book.Genre === "History" && book.publish >= 2003);
console.log(userBooks);


