/*
Must be khow about below events:
type, timestamp, defaultPrevented
target, toElement, srcElement, currentTarget
clientX, clientY, screenX, screenY
altkey, ctrlkey, shiftkey, keycode
*/

/* 
---> Event bubbling: bottom up approach (eg:inner element 
lai click garda pahila inner element click hunxa tespaxi 
outer element click hunu) , yesma addEventListener ko 
third parameter false rakhinxa (default pani false hunxa)
 
---> Capturing mode: top down approach, opposite to event bubbling , yesma 
addEventListener ko third parameter true rakhinxa

--> To avoid event bubbling we used e.stopPropagation() method
*/

const container = document.querySelector(".container");
const thirdBox = document.querySelector(".box3");
const url = document.querySelector("#url");

container.addEventListener("click", function (e) {

    // console.log("Clicked inside the container.");
}, false)

thirdBox.addEventListener("click", function (e) {
    e.stopPropagation()
    // console.log("Clicked inside third box.");
}, false)

url.addEventListener("click", (e) => {
    e.preventDefault(); // It stopped to go in href link
    e.stopPropagation();
    console.log("Link was clicked.");
}, false)

container.addEventListener("click", function (e) {
    if (e.target.className === 'box') {
        let removeIt = e.target;
        removeIt.remove()
    }

}, false)
