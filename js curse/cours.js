//&GAME start
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


let player = {
    name: "per",
    chips: "145"
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// console.log(cards);

function getRandomCard() {
     let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if(randomNumber === 1){
        return 11;
    } else {
       return randomNumber;
    };
};
// return getRandomCard;

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    };
    sumEl.textContent = "sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "Blackjack!";
        hasBlackJack = true;
} else {
    message = "You Lost?";
        isAlive = true;
}
    messageEl.textContent = message;
};

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    };
    
};


//*loahdey
// function loseMoney() {
    
// };



//*4:10:42;









//&GAME END
//*3:58:07MY First OBJECT
// let course = {
//     title: "learn css grid for free",
//     lessons: 16,
//     creator: "Per haledr borghan",
//     length: 63,
//     level: 2,
//     isfree: true,
//     tags: ["Html", "css"]
// };

console.log(course.title);

//*3:46:44MY First Logic Opration
// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// };

// function showSolution() {
//     console.log("showing the solution...");
// };






//*3:17:09 return lesson;
// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time;
//     } else if (player2Time < player1Time) {
//         return player2Time;
//     } else {
//         return player1Time;
//     };
// };
// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);



// let per = ["per boragan", 35, true];>>>>>>//*Arreys is here;
// console.log(per[1]);

//*Count to ten!
// for (let count = 10; count < 21; count += 1){
//     console.log(count);
// };


// //*First loop < count from 1 to 5 steps 1;
// for (let i = 0; i < 6; i += 1){
//     console.log(i);
// };
// //*count from 10 to 100 steps 10; LOOP
// for (let i = 10; i < 101; i += 10){
//     console.log(i);
// };

// let cards = [7, 3, 9];
// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i]);
// };

// let sentence = ["Hello ", "my ", "name ", "is ", "Per "];
// let greetimgEl = document.getElementById("greeimg-el");

// for (let i = 0; i < sentence.length; i++){
//     greetimgEl.textContent += sentence[i] + " ";
// };


//* 3:08:46
// let age = 21;
// greetimgEl.textContent += sentence[i] + " ";      if (age <= 20) {
//     console.log("Ypu can not entet the club");
// } else {
//     console.log("welcome");
// };