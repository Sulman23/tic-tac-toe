// Getting DOM Elements
var boxes    = document.querySelectorAll(".box");
var player   = document.getElementById("player");
var wonMsg   = document.getElementById("wonMsg");
var resetBtn = document.getElementById("reset");
var winImg   = document.getElementById("winImg");

// Declaring turn and won 
var turn = "x";
var won  = false;

// function to change the turn
const changeTurn = () => {
    return turn === "x" ? "o" : "x"; 
}

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
   
})


// logic for player turn and reset the game
boxes.forEach((box) => {
    // turn on every box 
    box.addEventListener("click", () => {
        // check if box is not empty then write the x or o
        if (box.innerText === "") {
            box.innerText = turn;
            turn = changeTurn();
            console.log(box)
        }
        // turn of playe 
        player.innerHTML = `Turn of ${turn}`;
    })

    // Reset the game 
    resetBtn.addEventListener("click", () => {
        box.innerHTML = "";
    });

})





