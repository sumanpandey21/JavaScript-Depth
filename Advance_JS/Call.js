
// Function to set the username on an object
function setUsername(username) {
    // `this` refers to the current object (will be set by call())
    this.username = username;
}

// Function constructor to create a user
function createUser(username, email, password) {
    //  Borrowing the setUsername function
    // `call()` is used to explicitly bind `this` to the current object (createUser's object)
    setUsername.call(this, username);

    //  Now set other properties directly
    this.email = email;
    this.password = password;
}

// Creating a new user object using `new` keyword
const user1 = new createUser("User1", "user1@gmail.com", "abc123");

//  Logging the created user object
console.log(user1);

// -------------------------------------------------------------------------------------------

// You can achieve the same thing using ES6 class syntax (syntactic sugar):
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const user2 = new User("User1", "user1@gmail.com", "abc123");
console.log(user1);