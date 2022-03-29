// Getting DOM Elements
const boxes    = document.querySelectorAll(".box");
const player   = document.getElementById("player");
const info     = document.getElementById("info");
const msg      = document.getElementById("wonMsg");
const resetBtn = document.getElementById("reset");

// Declaring turn and won status 
let turn = "X";  
let won  = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"; 
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
    // Now check the win
    if((a === b) && (b === c) && (a !== "")){
        msg.innerText = a + " Won";
        won = true;
    }
});
}

// Game logic 
// Getting every box from boxes
boxes.forEach((box) => {
    // writing the turn on boxes
    let boxClicked =  () => {
        // check if box is empty then write the x or o
        if (box.innerText === "") {
            box.innerText = turn;
            // change the turn like x to o
            turn = changeTurn();
        }
        // Check the win
        checkWin();
        // Won or Draw
        if (won == true) {
            info.classList.remove("inactive");
        } else if (checkDraw()) {
            info.classList.remove("inactive");
            msg.innerText = "Draw ";
        } else {       
            // turn of player
            player.innerText = `Turn of ${turn}`;
        }
    }

    // Reset the game 
    const resetGame = () => {
        box.innerHTML = "";
        msg.innerHTML = "";
        player.innerText = "Turn of X";
        info.classList.add("inactive");
        turn = "X";
        won = false;
    };

    const checkDraw = () => {
       return [...boxes].every(cell => {
           return cell.innerText == "X" || cell.innerText == "O";
        });
    }
    
    // EventListeners 
    box.addEventListener("click", boxClicked);
    resetBtn.addEventListener("click", resetGame);

});
