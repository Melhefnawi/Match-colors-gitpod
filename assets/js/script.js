// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

window.onload = () => {
    //add event listener to prevent the default behavior
    const mouseOnlyNumberInputField = document.getElementById("answer-box");
    const mouseOnlyNumber = document.getElementById("txt");
    mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
        event.preventDefault();
    });
    mouseOnlyNumber.addEventListener("keypress", (event) => {
        event.preventDefault();
    });
};

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let color = this.getAttribute("data-type");
                setColor(color);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame();

});

function runGame() {

    document.getElementById("txt").value = "";
    returnColor();
}

function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function setColor(color) {

    let input = document.getElementById('answer-box');
    input.style.backgroundColor = color;

}

function returnColor() {

    let textColor = document.getElementById('txt').value;
    if (textColor === "") {
        let num1 = Math.floor(Math.random() * 19);
        let colors = ["aqua", "beige", "black", "gold", "indigo", "magenta", "maroon", "navy", "olive", "orange", "peachpuff", "pink", "purple", "red", "gray", "violet", "yellow", "salmon", "turquoise"];
        document.getElementById('txt').value = colors[num1];
        return;
    }
}

function checkAnswer() {

    let color1 = document.getElementById("txt").value;
    let color2 = document.getElementById("answer-box");
    let color3 = color2.style.backgroundColor;

    if (color3 === "white") {
        alert(`please choose a color`);
    }
    else if (color1 === color3) {

        alert(`you choose correct color`);
        incrementScore();
        setColor("white");
        runGame();

    } else {
        alert(`you choose incorrect color`);
        incrementWrongAnswer();
        setColor("white");
    }

}