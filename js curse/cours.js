let firstCard = 11;
let secondCard = 10;
let cardse = [firstCard, secondCard];
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
    cardsEl.textContent = "Cards: " + cardse[0] + " " + cardse[1];//  ;
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


// let per = ["per boragan", 35, true];>>>>>>//*Arreys is here;
// console.log(per[1]);

//*Count to ten!
// for (let count = 10; count < 21; count += 1){
//     console.log(count);
// };


//*First loop
for (let i = 0; i < 6; i += 1){
    console.log(i);
};

//* 2:21:46
// let age = 21;
// if (age <= 20) {
//     console.log("Ypu can not entet the club");
// } else {
//     console.log("welcome");
// };