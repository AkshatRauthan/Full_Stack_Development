let gameWinner = (currwinner, setWinner) => {
    if (!currwinner) setWinner((winner) => "Draw");
    else setWinner(() => currwinner);
};

let changeName = (flag, setchangingConfig) => {
    setchangingConfig(flag);
};

let restartGame = (winner, setWinner, setScore, setBox, playerName) => {
    if (winner && winner != "Draw") {
        setScore((currScore) => {
            if (winner == playerName.ofX) currScore.ofX++;
            else currScore.of0++;
            return currScore;
        });
    }
    setWinner(() => {
        let winner = null;
        return winner;
    });
    setBox(() => Array(9).fill(null));
};

let startNewGame = (score, setBox, setScore, setWinner) => {
    setBox(() => Array(9).fill(null));
    setScore(() => {
        score.ofX = 0;
        score.of0 = 0;
        return score;
    });
    setWinner(() => {
        let winner = null;
        return winner;
    });
};

export {gameWinner, changeName, restartGame, startNewGame};