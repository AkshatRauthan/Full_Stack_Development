// Array Of All The Three Positions' Combinations That Are Winning.
const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Function To Check The Result Of The Game.
let checkResult = (box, playerName, gameWinner, setWinner) => {
    for (let arr of lines){
        if (box[arr[0]] && box[arr[0]] == box[arr[1]] && box[arr[1]] == box[arr[2]]){
            let winner = playerName[`of${box[arr[0]]}`];
            return gameWinner(winner, setWinner);
        }
    }
    for (let ch of box){
        if (!ch) return;
    }
    return gameWinner(null, setWinner);
}

// Function to check the winner of the game.
let checkWinner = (box) => {
    for (let arr of lines) {
        if (box[arr[0]] && box[arr[0]] == box[arr[1]] && box[arr[1]] == box[arr[2]]) {
            return box[arr[0]];
        }
    }
    for (let ch of box) {
        if (!ch) return null;
    }
    return 'tie';
}

// Function To Set The Value Of The Box 0 or X After Player Move.
let setBoxValue = (idx, val, box, setBox, player, setPlayer) => {
    if (box[idx]) return;
    setBox((currBox) => {
        currBox[idx] = val;
        return currBox;
    });
    setPlayer(player === 'X' ? '0' : 'X');
}


// Function To Make Computer Moves Based On Selected Difficulty.
let computerMove = (box, setBox, setBoxValue, player, setPlayer, difficulty) => {
    
    const emptyIndices = box.map((val, idx) => val === null ? idx : null).filter(val => val !== null);

    let makeStrategicMove = () => {
        // Try to win if there is any possibility
        for (let arr of lines) {
            if (box[arr[0]] === box[arr[1]] && box[arr[0]] && !box[arr[2]]) {
                return setBoxValue(arr[2], player, box, setBox, player, setPlayer);
            }
            if (box[arr[0]] === box[arr[2]] && box[arr[0]] && !box[arr[1]]) {
                return setBoxValue(arr[1], player, box, setBox, player, setPlayer);
            }
            if (box[arr[1]] === box[arr[2]] && box[arr[1]] && !box[arr[0]]) {
                return setBoxValue(arr[0], player, box, setBox, player, setPlayer);
            }
        }
        return randomMove();
    }

    let randomMove = () => {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        return setBoxValue(randomIndex, player, box, setBox, player, setPlayer);
    }

    let unbeatableMove = () => {
        let opponent =  "0";
        // Implement unbeatable strategy using Minimax algorithm
        let minimax = (newBox, depth, isMaximizing) => {
            let scores = { 'X': 1, '0': -1, 'tie': 0 };
            let result = checkWinner(newBox);
            if (result !== null) {
                return scores[result];
            }

            if (isMaximizing) {
                let bestScore = -Infinity;
                for (let i = 0; i < newBox.length; i++) {
                    if (newBox[i] === null) {
                        newBox[i] = player;
                        let score = minimax(newBox, depth + 1, false);
                        newBox[i] = null;
                        bestScore = Math.max(score, bestScore);
                    }
                }
                return bestScore;
            } else {
                let bestScore = Infinity;
                for (let i = 0; i < newBox.length; i++) {
                    if (newBox[i] === null) {
                        newBox[i] = opponent;
                        let score = minimax(newBox, depth + 1, true);
                        newBox[i] = null;
                        bestScore = Math.min(score, bestScore);
                    }
                }
                return bestScore;
            }
        }

        let bestMove;
        let bestScore = -Infinity;
        for (let i = 0; i < box.length; i++) {
            if (box[i] === null) {
                box[i] = player;
                let score = minimax(box, 0, false);
                box[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        return setBoxValue(bestMove, player, box, setBox, player, setPlayer);
    }

    if (difficulty === "easy") {
        return randomMove();
    }
    else if (difficulty === "medium") {
        return (Math.random() <= 0.25)? randomMove() : makeStrategicMove();
    }
    else {
        return unbeatableMove();
    }
}

export { checkResult, setBoxValue, computerMove, checkWinner };