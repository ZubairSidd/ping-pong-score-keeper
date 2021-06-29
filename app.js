const playerOneButton = document.querySelector("#playerOne")
const playerTwoButton = document.querySelector("#playerTwo")
const resetButton = document.querySelector("#reset")

let playerOneScore = document.querySelector("#playerOneScore")
let playerTwoScore = document.querySelector("#playerTwoScore")

const scoreSelectOption = document.querySelector("#scoreSelect")

function hasWon(score){
    if(score.innerHTML == scoreSelectOption.value){
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        return true;
    }
}
function playerOneButtonListener(){
    playerOneScore.innerHTML++;
    if(hasWon(playerOneScore)){
        playerOneScore.style.color = "#20e78a";
        playerTwoScore.style.color = "#fd0e35";
    }
    
}
function playerTwoButtonListener(){
    playerTwoScore.innerHTML++;
    if(hasWon(playerTwoScore)){
        playerOneScore.style.color = "#fd0e35";
        playerTwoScore.style.color = "#20e78a";
    }
}
function resetButtonListener(){
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
}

playerOneButton.addEventListener("click", playerOneButtonListener)
playerTwoButton.addEventListener("click", playerTwoButtonListener)
resetButton.addEventListener("click", resetButtonListener)