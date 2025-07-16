let firstCard = 11;

let secondCard = 10;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
//

if (sum < 21) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "Blackjack!😎";
    hasBlackJack = true;
} else {
    message = "You Lost 😶?";
    isAlive = false;
};

console.log(message);
console.log(hasBlackJack);
//* 1:39:48

// let age = 21;

// if (age <= 20) {
//     console.log("Ypu can not entet the club");
// } else {
//     console.log("welcome");
// };

//* 2:02:46

