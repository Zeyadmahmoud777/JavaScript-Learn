//document.getElementById("count-el").innerText = 5; // Example of setting the count to 5

// let count = 0;
// console.log(count);
// let MyAge = 17;
// console.log(MyAge);

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);

// let myage = 35;
// let humanDogRatio = 7;

// let myDogAge = myage * humanDogRatio;
// console.log(myDogAge);

// let bounsPoints = 50;
// console.log(bounsPoints);

// bounsPoints = bounsPoints + 50;
// console.log(bounsPoints);

// bounsPoints = bounsPoints - 75;
// console.log(bounsPoints);

// bounsPoints = bounsPoints + 45;
// console.log(bounsPoints);

// function increment() {
//     // console.log("The button was cliked");
// }

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countdown();

// function numG() {
//     console.log(42);
// }
// numG();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }
// logLapTime();


//~for we can use this code to increment and decrement the count value
// let count = 0;

// function increment() {
//     count = count + 1;
//     document.getElementById("count-el").innerText = count;
//     // console.log(count);
// }
 ///~for remove number from count we do this way
// function decrement() {
//     count = count - 1;
//     document.getElementById("count-el").innerText = count;
// // console.log(count);
// }

//* like a man in cours
// let countEl = document.getElementById("count-el");

// console.log(countEl);

// let count = 0;

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
// }

// let countEl = document.getElementById("count-el");

// console.log(countEl);

// let count = 0;

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
//     console.log(count);
// }
// function decrement() {
//     count = count - 1;
//     countEl.innerText = count;
//     console.log(count);
// }
// function save() {
//     console.log(count);
// }
// save();
// let username = "per";

// let message = "you have three new notifications";

// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser); // message + ", " + username + "!"    (message + "," + username ); fasla ma benhom
// let hello = "hi";

// let username = "osama";

// let massege = "my name is";

// let chat = hello + ", " + massege + " " + username;

// let namee = "per Harald Borgen";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + namee;

// console.log(myGreeting); // Hi, my name is per Harald Borgen

// console.log(chat);

// let welcomeEl = document.getElementById("welcome-el"); // Get the element with id "welcome-el" and write somthing in html by js

// let namee = "per Harald Borgen";
// let greeting = "Welcome back ";

// welcomeEl.innerText = greeting + namee;

// //&for edit the code and add one mor thing

// welcomeEl.innerText = welcomeEl.innerText + "👋"; //to short code we use welcomeEl.innerText += "👋";


// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el");
// let count = 0;

// function increment() {
//     count += 1;
//     countEl.textContent = count;
// }
// function save() {
//     let countStr = count + " - ";
//     saveEl.textContent += countStr;
//     countEl.textContent = 0; // Reset the count display after saving
//     count = 0; // Reset the count variable to 0
// }
//*dk 1:5:37 #26
//* 1:15:46 section:2 variables practing lesson:1

// let firstName = "Per";
// let lastName = "Borgen";

// let fullName = firstName + " " + lastName;

// console.log(fullName);

//*shose ico
// let errorParagraph = document.getElementById("error");

// function purchase() {
//     console.log("button clicked");
//     errorParagraph.textContent = "Somthing went Wrong, Please try again";
// }

//*Black JACK GAME
let startGames = document.getElementById("start-btn");
let gameArea = document.getElementById("game-aro");

startGames.addEventListener("click", startGame); // Add event listener to the start button

function startGame() {
    startGames = gameArea.url="game.html"; // Set the URL to the blackjack game page
    // gameArea.style.display = "block";              // Show the game area
    // startGames.style.display = "block";          // Hide the start button
    

    
    
    // Initialize game variables and logic here
    // For example, you could set up player and dealer hands, scores, etc.
    // let playerHand = [];
    // let dealerHand = [];
    // let playerScore = 0;
    // let dealerScore = 0;
}
