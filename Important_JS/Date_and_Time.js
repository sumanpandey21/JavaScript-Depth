// Dates
const myDate = new Date()
console.log(myDate.toString()); //Thu May 01 2025 17:47:39 GMT+0545 (Nepal Time)
console.log(myDate.toDateString()); //Thu May 01 2025
console.log(myDate.toTimeString()); //17:49:15 GMT+0545 (Nepal Time)
console.log(myDate.toLocaleString()); // 5/1/2025, 5:47:39 PM
console.log(myDate.toLocaleDateString()); //5/1/2025
console.log(myDate.toLocaleTimeString()); //5:47:39 PM


//created own date
const createdDate = new Date(2003, 5, 17);
console.log(createdDate.toDateString()); //Tue Jun 17 2003 (Month index start from 0)

//created own date&time 
const createdTime = new Date(2003, 5, 17, 15, 16, 17)
console.log(createdTime.toLocaleString()); //6/17/2003, 3:16:17 PM

const formatDate = new Date("05-01-2025");
console.log(formatDate.toLocaleDateString()); //5/1/2025 (MM/DD/YY)

let newDate = new Date("08-01-2025");
const d1 = newDate.toLocaleString('default',{
    weekday:"long",
    year:"2-digit",
    month:"long"
})
console.log(d1); //August 25 Friday


// Times
let myCreatedDate = new Date("05-01-2025")
let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

