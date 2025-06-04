//constructor function

function userDetails(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greet = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

/*

const userOne = userDetails("Suman", 5, true);
const userTwo = userDetails("Pandey", 15, false);  --> In this case, It override the details of userOne, to avoid this thing we used keyword "new"

*/

const userOne = new userDetails("Suman", 5, true);
const userTwo = new userDetails("Pandey", 15, false);

console.log(userOne);
console.log(userOne.greet());
