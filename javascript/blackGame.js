let sttIng = document.getElementById("stting");
let SttingEl = document.getElementById("stting-el");
let closeEl = document.getElementById("close-el");
let contGame = document.getElementById("continue-el");
sttIng.addEventListener("click", sttIng);
closeEl.addEventListener("click", close);
function openset() {
    sttIng = SttingEl.style.display = "block";
};
function close() {
   sttIng = SttingEl.style.display = "none";
};
function Continue() {
    sttIng = SttingEl.style.display = "none";
    contGame = document.getElementById("continue-el").style.display = "block";
};

