// Getting DOM Elements
var boxes    = document.querySelectorAll(".box");
var player   = document.getElementById("player");
var wonMsg   = document.getElementById("wonMsg");
var winImg   = document.getElementById("winImg");
var resetBtn = document.getElementById("reset");
let resetImg = document.querySelector("#resetImg");

// Declaring turn and won 
var turn = "x";
var won  = false;

// function to change the turn
const changeTurn = () => {
    return turn === "x" ? "o" : "x"; 
}

const checkWin = () => {
// Function to check for a win
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
wins.forEach((e) => {
    let a = boxes[e[0]].innerText;
    let b = boxes[e[1]].innerText;
    let c = boxes[e[2]].innerText;
    if((a === b) && (c ===b) && (a !== "")){
        wonMsg.innerText = a + " Won";
        won = true;
        winImg.src = "images/win.gif";
        console.log(winImg); 

    }
});
}

// logic for player turn and reset the game
boxes.forEach((box) => {
    // turn on every box 
    box.addEventListener("click", () => {
        // check if box is not empty then write the x or o
        if (box.innerText === "") {
            box.innerText = turn;
            turn = changeTurn();
            // console.log(turn);
        }
        // turn of playe 
        player.innerHTML = `Turn of ${turn}`;
        checkWin();

    })

    // Reset the game 
    const resetGame = () => {
        box.innerHTML = "";
        wonMsg.innerHTML = "";
        resetImg.innerHTML = "";

    };
    resetBtn.addEventListener("click", resetGame);

});
