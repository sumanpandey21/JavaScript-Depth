const divs = document.querySelectorAll(".box");
const body = document.querySelector("body");
divs.forEach((div) => {
    div.addEventListener("click", (e) => {
        if (e.target.id == "gray") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "white") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
        }
        if (e.target.id == "blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    })
})

