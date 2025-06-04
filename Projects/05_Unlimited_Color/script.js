
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const randomNumber = () => Math.floor(Math.random() * 256);

function generateRandomColor() {
    const red = randomNumber();
    const green = randomNumber();
    const blue = randomNumber();
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
}

let intervalID;
const startInterval = () => {
    if (!intervalID) {
        intervalID = setInterval(generateRandomColor, 1000);
    }
}
function intervalClear() {
    clearInterval(intervalID);    
    intervalID = null;
}

startButton.addEventListener("click", startInterval);

stopButton.addEventListener("click", intervalClear);