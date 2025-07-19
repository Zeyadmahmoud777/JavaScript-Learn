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


//*First loop < count from 1 to 5 steps 1;
for (let i = 0; i < 6; i += 1){
    console.log(i);
};
//*count from 10 to 100 steps 10; LOOP
for (let i = 10; i < 101; i += 10){
    console.log(i);
};

let cards = [7, 3, 9];
for (let i = 0; i < cards.length; i++){
    console.log(cards[i]);
};

let sentence = ["Hello ", "my ", "name ", "is ", "Per "];
let greetimgEl = document.getElementById("greeimg-el");

for (let i = 0; i < sentence.length; i++){
    greetimgEl.textContent += sentence[i] + " ";
};


//* 3:8:46
// let age = 21;
// greetimgEl.textContent += sentence[i] + " ";      if (age <= 20) {
//     console.log("Ypu can not entet the club");
// } else {
//     console.log("welcome");
// };