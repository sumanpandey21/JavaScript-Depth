function changeH1(name) {
    document.querySelector("h1").innerHTML = "Best JS Series with Suman"
}
const changeMe = setTimeout(changeH1, 2000);

function stopTimeout() {
    clearTimeout(changeMe);
}
// document.querySelector("#stop").addEventListener("click", stopTimeout)


// set interval
let runningInterval = 0
const sayDate = function (str) {
    console.log(`${str} ${Date.now()}`);
}
const startInterval = () => {
    runningInterval = setInterval(sayDate, 1000, "Hello")
}
document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(runningInterval)
})

document.querySelector("#start").addEventListener("click", function () {
    startInterval()
})