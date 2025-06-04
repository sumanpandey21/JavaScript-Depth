
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `#_*9${this.password} !+`
    }

    changeUsername() {
        return `${this.username.charAt(0).toUpperCase()}${this.username.slice(1)}`
    }
}

const user1 = new User("suman", "suman@hmail.com", "suman")
console.log(user1.encryptPassword());
console.log(user1.changeUsername());


// Behind the scene

function User1(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User1.prototype.encryptPassword = function () {
    return `#_*9${this.password} !+`

}

User1.prototype.changeUsername = function () {
    return `${this.username.charAt(0).toUpperCase()}${this.username.slice(1)}`
}

const user2 = new User1("hello", "hello@gmail.com", "hello")
console.log(user2.encryptPassword());
console.log(user2.changeUsername());

