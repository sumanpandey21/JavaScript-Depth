const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task 1 is completed.');
        resolve()
    }, 1000);
})
promiseOne.then(function () {
    console.log('Async task 1 resolved.');

});


// Another one promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is completed.");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async task 2 resolved.");

})


// Another promise
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Suman", email: "suman@xample.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(`Promise three: ${user.username} , ${user.email}`);
})


//another promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let isError = false;
        if (!isError) {
            resolve({ first_name: "Suman", last_name: "Pandey", password: "suman@123" })
        } else {
            reject("Error: Something went wrong!!")
        }
    }, 1000)
})
promiseFour.then((user) => {
    return `${user.first_name}  ${user.last_name}`;
}).then((fullName) => {
    console.log(fullName);

}).catch((error) => {
    console.error(error);
}).finally(() => console.log("The promise is either resolved or rejected"));


//another promise
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "JS123" })
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000)
});
async function consumedPromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.error(error)
    }

}
consumedPromiseFive();



// fetch API : https://randomuser.me/api/

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

    } catch (error) {
        console.error(error)
    }

}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))