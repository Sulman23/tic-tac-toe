// Getting DOM Elements
const board = document.getElementById("board");
var boxes    = document.querySelectorAll(".box");
var player   = document.getElementById("player");
var wonMsg   = document.getElementById("wonMsg");
var winImg   = document.getElementById("winImg");
var resetBtn = document.getElementById("reset");
let resetImg = document.querySelector("#resetImg");

// Declaring turn and won status 
var turn = "x";
var won  = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "x" ? "o" : "x";   
}

// Function to check for a win
const checkWin = () => {
// winnig combinations
const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// logic for winning the game 
wins.forEach((win) => {
    let a = boxes[win[0]].innerText;
    let b = boxes[win[1]].innerText;
    let c = boxes[win[2]].innerText;
    if((a === b) && (b === c) && (a !== "")){
        wonMsg.innerText = a + " Won";
        won = true;
        winImg.src = "win.gif";
         // if win then stop the game
            console.log(boxes);
       
    }
});
}

// Game logic 
// Getting every box from boxes
boxes.forEach((box) => {
    // writing the turn on boxes
    // box.addEventListener("click", boxClicked);
    let boxClicked = () => {
        // check if box is empty then write the x or o
        if (box.innerText === "") {
            box.innerText = turn;
        }
        // change the turn like x to o
        turn = changeTurn();
        // turn of player
        player.innerText = `Turn of ${turn}`;
        // Check the win
        checkWin();
       
    }

    // Reset the game 
    const resetGame = () => {
        box.innerHTML = "";
        wonMsg.innerHTML = "";
        resetImg.innerHTML = "";
        player.innerText = "Turn of x";
        turn = "x";
        won = false;
    };

    box.addEventListener("click", boxClicked);
    resetBtn.addEventListener("click", resetGame);

});
