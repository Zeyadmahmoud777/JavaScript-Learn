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

let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
}
function decrement() {
    count = count - 1;
    countEl.innerText = count;
    console.log(count);
}
function save() {
    console.log(count);
}
save();

//*dk 49:07 #20