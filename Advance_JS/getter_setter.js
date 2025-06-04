class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get password() {
        return `${this._password.toUpperCase()}`
    }
    set password(value) {
        this._password = value.toUpperCase()
    }
}
const suman = new User("suman@gmail.com", "abc")
console.log(suman.password);
