// for of
const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    // console.log(element);

}
const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(greet);

}

//Maps
const map = new Map()
map.set("NRP", "Nepali Rupees")
map.set("INR", "Indian Rupees")
map.set("USD", "US Dollor")
// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key}:- ${value}`);
}

const games = {
    game1: "GTA V",
    game2: "PUBG",
    game: "Call of Duty"
}
for (const key in games) {
    console.log(`${key}:- ${games[key]}`);
}

