const body = document.querySelector("body");
const headingTitle = document.querySelector("h1");
const headingLevel = document.querySelector("h2");
const mainContainer = document.querySelector(".button-container");
const colorButtons = document.querySelectorAll(".buttons");

let firstGame = true, level = 0, inputNo = 0, colorSequence = [];

function AddStartGameEvent(){
    body.addEventListener("click",StartGame);
    body.addEventListener("keypress",StartGame);
    console.log(`\nAddStartGameEvent()`);
}

function RemoveStartGameEvent(){
    body.removeEventListener("click", StartGame);
    body.removeEventListener("keypress", StartGame);
    console.log(`\nRemoveStartGameEvent()`);
}

function StartGame(){
    RemoveStartGameEvent();
    headingTitle.innerText = `Simon Says`;
    console.log(`\nStartGame()`);
    level = 0;
    colorSequence = [];
    PlayGame();
}

function PlayGame(){
    level++;
    headingLevel.innerText = `Level : ${level}`;
    console.log('\nPlayGame()');
    NextColourInSequence();
    UserInput();
}

function NextColourInSequence(){
    let idx = Math.floor(Math.random()*4);
    colorSequence.push(colorButtons[idx]);
    setTimeout( function() {
        colorButtons[idx].setAttribute("id","white");
        console.log(`\nThe Selected Colour Is ${colorButtons[idx].classList[1]}`);
        setTimeout( function (){
            colorButtons[idx].removeAttribute("id");
        }, 300);
    }, 1000);
}

function ButtonEvents(event){
    if (event.target.classList[0] == "buttons"){
        if (event.target != colorSequence[inputNo]) GameOver();
        else inputNo++;
        if (inputNo == level){
            console.log(`\nRemove Buttons Event Listners`);
            mainContainer.removeEventListener("click", ButtonEvents);
            return PlayGame();
        }
    }
}

function UserInput(){
    inputNo = 0;
    console.log(`\nEvent Listeners Added On Buttons`);
    mainContainer.addEventListener("click", ButtonEvents);
}

function GameOver(){
    body.setAttribute("id", "red");
    headingTitle.innerText = `Game Over`;
    headingLevel.innerText = `Score : ${level-1} Points\nPress any key to continue`;
    console.log(`\nGameOver()`);
    setTimeout(() => {
        body.removeAttribute("id");
        setTimeout(AddStartGameEvent, 1000);
    },75);
}

if (firstGame){
    firstGame = false;
    AddStartGameEvent();
} 