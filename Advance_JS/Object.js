function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increaseScore = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Score is: ${this.score}`);

}

const obj1 = new createUser("User1", 77)
const obj2 = new createUser("User2", 88)


obj1.printMe()
obj2.printMe()