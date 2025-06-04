// converting node list into an array
const myNodeList = document.querySelectorAll("h2");
const convertNodeListIntoArray = Array.from(myNodeList);
convertNodeListIntoArray.forEach((header) => header.style.color = "green");

const weeks = document.querySelector('.weeks');
for (let i = 0; i < weeks.children.length; i++) {
    // console.log(weeks.children[i].innerText);

}
weeks.firstElementChild;
weeks.lastElementChild;
weeks.childNodes;

const firstDay = document.querySelector(".day");
firstDay.parentElement;
firstDay.nextElementSibling;
firstDay.previousElementSibling;

// Create element
const div = document.createElement("div");
div.className = "newDiv";
div.id = "container";
div.setAttribute("title", "generated div");
div.style.backgroundColor = "green";
div.style.padding = "20px";
div.innerHTML = "Hello"
document.body.appendChild(div);

//adding element using function
const addLanguage = (langName) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName)); // This is optimize version of --> li.innerHTML= `${langName}`;
    document.querySelector(".language").appendChild(li);
}
addLanguage("Python")
addLanguage("C")
addLanguage("Java")
addLanguage("Ruby")

// edit the element
const editListElement = (newLiText, listNumber) => {
    const fourthLanguage = document.querySelector(`li:nth-child(${listNumber})`);
    const newLi = document.createElement("li");
    newLi.textContent = `${newLiText}`
    fourthLanguage.replaceWith(newLi);
}
editListElement("React JS", 3);
editListElement("PHP", 4);

//remove element
const lastLanguage = document.querySelector("li:last-child");
lastLanguage.remove();

const markLi = (liNum) => {
    const selectedLi = document.querySelector(`li:nth-child(${liNum})`)
    selectedLi.style.textDecoration = "line-through";
}
markLi(4);