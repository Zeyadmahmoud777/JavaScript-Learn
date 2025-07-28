//&GAME start
// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.querySelector("#sum-el");
// let cardsEl = document.getElementById("cards-el");

// let player = {
//     name: "per",
//     chips: "145"
// };
// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.name + ": $" + player.chips;





// function getRandomCard() {
//      let randomNumber = Math.floor(Math.random() * 13) + 1;
//     if (randomNumber > 10) {
//         return 10;
//     } else if(randomNumber === 1){
//         return 11;
//     } else {
//        return randomNumber;
//     };
// };

// function startGame() {
//     isAlive = true;
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();
//     cards = [firstCard, secondCard];
//     sum = firstCard + secondCard;
//     renderGame();
// };
// function renderGame() {
//     cardsEl.textContent = "Cards: ";
//     for (let i = 0; i < cards.length; i++){
//         cardsEl.textContent += cards[i] + " ";
//     };
//     sumEl.textContent = "sum: " + sum;
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?";
// } else if (sum === 21) {
//     message = "Blackjack!";
//         hasBlackJack = true;
// } else {
//     message = "You Lost?";
//         isAlive = true;
// }
//     messageEl.textContent = message;
// };

// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard();
//     sum += card;
//     cards.push(card);
//     renderGame();
//     };
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

// console.log(course.title);

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



// let per = ["per boragan", 35, true];>>>>>>
//*Arreys is here;
// console.log(per[1]);

//*Count to ten!
// for (let count = 10; count < 21; count += 1){
//     console.log(count);
// };


 //*First loop < count from 1 to 5 steps 1;
// for (let i = 0; i < 6; i += 1){
//     console.log(i);
// };
 //*count from 10 to 100 steps 10; LOOP
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

//! Anther App here st
// let person = {
//     name: "Per",
//     age: 35,
//     country: "Norway"
// };

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
// };
// logData();

//*if else
// let age = 18;

// if (age < 6) {
//     console.log("free");
// } else if (age < 18) {
//     console.log("child discount");
// } else if (age < 27) {
//     console.log("student discount");
// } else if (age < 67) {
//     console.log("full price");
// } else {
//     console.log("senior citizen discount");
// }

//? the loop is here
// let largeCountries = ["China", "India", "USA", "Indoesia", "Pakistan"];

// console.log("The 5 largest countries in the world");
// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i]);
// };


//? the loop is here

// let largeCountries = ["China", "India", "USA", "Indoesia", "Pakistan"];

// console.log("The 5 largest countries in the world:");
// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i]);
// };

//? the loop is here
//  let largeCountries = ["Tuvalu", "India", "USA", "Indoesia", "Monaco"];

// largeCountries.pop()
// largeCountries.push("Pakistan"); //*replace in the last el in loop;
// largeCountries.shift()
// largeCountries.unshift("China");//* replace in the first el in loop;
// console.log(largeCountries);


//? the Logical Operators is here

// let dayOfMonuth = 13;
// let weekday = "Friday";

// if (dayOfMonuth === 13 && weekday === "Friday") {
//     console.log("😱");
// };


//*ARREY IMP
// function getRandomItemFromArray(arr) {//*GOOGLE
//   // Generate a random floating-point number between 0 (inclusive) and 1 (exclusive)
//   const randomIndex = Math.random();

//   // Multiply the random number by the array's length to get a number within the index range
//   // Use Math.floor() to round down to the nearest whole number, ensuring it's a valid array index
//   const index = Math.floor(randomIndex * arr.length);

//   // Return the element at the calculated random index
//   return arr[index];
// }
// const randomItem = getRandomItemFromArray(hands);

// console.log(randomItem);


//? the Logical Operators is here game
// let hands = ["rock", "paper", "scissor"];//*FROM A MEN YOUTUBE

// function getHadn() {
//     let randomIndex = Math.floor(Math.random() * 3);
//     return hands[randomIndex];
// };

// console.log(getHadn());



// function getRandItem(item) {//*my code
//     const randIndex = Math.random();
//     const index = Math.floor(randIndex * item.length);

//     return item[index];
// };

// const items = ["plan", "car", "bus", "tree", "phone"];

// const randItem = getRandItem(items);

// console.log(randItem);
//*4:30:46
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");
// function sortFruit() {
//     for (let i = 0; i < fruit.length; i++){
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎";
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊";
//         };
//     };

// };
// sortFruit();
//! end Anther App here1
//! start  Chrome Extension here2
// function saveLead() {
//     console.log("btn");
// };

//*WE Add a el.addEventListener("here put what we want like "click"" and we call the function or event well happen when we click the btn);
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const removeBtn = document.getElementById("cleare-btn");

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
});

function cleare() {
    inputEl.value = '';
}

function renderLeads() {
    let listItem = "";
    for (let i = 0; i < myLeads.length; i++){
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> ";         //* the anther sloution for this code
        listItem += `
        <li>
            <a target='_blank' href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li> `;
    };
    ulEl.innerHTML = listItem;
}

//*5:34:45


//* pradctise __template strings/literals

const recipient = "James";
const sender = "Per Harald Borgen";

const email = `Hey ${recipient}! How is it going? Cheers ${sender}`;

console.log(email);







// const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEl.append(li);
//* MY FIRST InnerHTML code in js; 5:20:05
// const container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>";
// };

//! end  Chrome Extension here2
