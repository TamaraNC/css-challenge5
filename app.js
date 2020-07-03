const toggleBtn = document.querySelector(".click-container");
const toggleClick = document.querySelector(".click");
const body = document.querySelector("body");
const header = document.querySelector("header");
const bigCards = document.querySelectorAll(".big-card");
const smallCards = document.querySelectorAll(".small-card");
const bigNum =document.querySelectorAll(".big-num");
const smallNum =document.querySelectorAll(".small-num");
const title = document.querySelectorAll(".title");

toggleBtn.addEventListener("click", () => {
    if (toggleBtn.style.justifyContent === "flex-end") {
        dark()
    } else {
        toggleBtn.style.justifyContent = "flex-end";
        light()
    }
})

function dark() {
        toggleBtn.style.justifyContent = "start";
        toggleClick.style.backgroundColor = "hsl(232, 19%, 15%)";
        body.style.backgroundColor = "rgb(31, 34, 46)";
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
        bigCards.forEach(card => {
            card.style.backgroundColor = "hsl(228, 28%, 20%)";
        })
        smallCards.forEach(card => {
            card.style.backgroundColor = "hsl(228, 28%, 20%)";
        })
        bigNum.forEach(num => {
            num.style.color = "white";
        })
        smallNum.forEach(num => {
            num.style.color = "white";
        })
        title.forEach(item => {
            item.style.color = "white";
        })

    }

function light() {
        toggleClick.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        bigCards.forEach(card => {
            card.style.backgroundColor = "hsl(227, 47%, 96%)";
        })
        smallCards.forEach(card => {
            card.style.backgroundColor = "hsl(227, 47%, 96%)";
        })
        bigNum.forEach(num => {
            num.style.color = "black";
        })
        smallNum.forEach(num => {
            num.style.color = "black";
        })
        title.forEach(item => {
            item.style.color = "black";
        })
    }


