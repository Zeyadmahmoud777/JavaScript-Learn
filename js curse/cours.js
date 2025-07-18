// let cardse = [firstCard, secondCard];
let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el");


function startGame() {
    renderGame();
};
function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;//cardse[0]  cardse[1];
    sumEl.textContent = "sum: " + sum;
    if (sum < 21) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "Blackjack!";
    hasBlackJack = true;
} else {
    message = "You Lost?";
    isAlive = false;
};
messageEl.textContent = message
};

function newCard() {
    let card = 7;
    sum += card;
    startGame();
};



//* 2:21:46
// let age = 21;
// if (age <= 20) {
//     console.log("Ypu can not entet the club");
// } else {
//     console.log("welcome");
// };