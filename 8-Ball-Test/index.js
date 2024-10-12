let answers = [
    "answer 1",
    "answer 2",
    "answer 3",
    "answer 4",
    "answer 5"
];

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function onClick() {
    document.getElementById("text").innerHTML = answers[randomNumber(5)];
}