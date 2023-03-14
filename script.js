// 1. create a new project
// 2. ask the user for name email and age and show as follows (use inputs, divs, addEventListener)
// 	"Daniel (28) - zaodk.@gamil.com"

// 3. create three buttons one will change a divs background one will change the border and one will change the text randomly from the following array
// (use classList)
// ["apple", "banana", "orange", "grapes", "watermelon"]


// 🤚🏾

// BONUS 
// 4. create input which the user will tell how many levels and show in div
// 4.1 instead of * use <div></div> with some styling


let userName = document.getElementById("name");
let userAge = document.getElementById("age");
let userEmail = document.getElementById("email");
let submit = document.getElementById("submit");
let showUserInput = document.getElementById("showUserInput");


submit.addEventListener("click", function() {

    showUserInput.innerText = `${userName.value} (${userAge.value}) - ${userEmail.value}`;
});

let changeBg = document.getElementById("changeBg");
let fruits = document.getElementById("fruits");
let fruitsColor = ["pink", "yellow", "orange", "purple", "red"];
let changeFruitClass = document.getElementById("changeFruitClass");
let fruitsClass = ["apple", "banana", "orange", "grapes", "watermelon"]

let i = 0;
changeBg.addEventListener("click", function() {
    if (fruits.classList.contains(fruits.innerText)) {
        fruits.classList.remove(fruits.innerText);
    }
    fruits.style.backgroundColor = fruitsColor[i++];
    if (i > fruitsColor.length) {
        i = 0;
    }
});

let j = 0;

changeFruitClass.addEventListener("click", function() {
    if (j >= fruitsClass.length) {
        fruits.classList.remove(fruitsClass[j - 1]);
        j = 0;
    }
    if (j > 0) {
        fruits.classList.remove(fruitsClass[j - 1]);
    }
    fruits.classList.add(fruitsClass[j]);
    fruits.innerText = fruitsClass[j];
    j++;
});

let changeBorder = document.getElementById("changeBorder");
let fruitsBorder = ["", "solid", "dotted", "double", "dashed"]

let k = 0;
changeBorder.addEventListener("click", function() {

    fruits.style.border = `5px ${fruitsBorder[k++]}`;
    if (k >= fruitsBorder.length) {
        k = 0;
    }
});

let changeTextRandom = document.getElementById("changeTextRandom");

changeTextRandom.addEventListener("click", function() {
    fruits.innerText = fruitsClass[getRandomInt(fruitsClass.length)];
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}