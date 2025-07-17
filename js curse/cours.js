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
    cardsEl.textContent = "Cards: " +  firstCard + " " + secondCard;
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




//* 2:21:46
// let age = 21;
// if (age <= 20) {
//     console.log("Ypu can not entet the club");
// } else {
//     console.log("welcome");
// };