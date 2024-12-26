import Box from "./Box.jsx";
import "../styles/GameBoard.css";
import { useState, useEffect } from "react";

function GameBoard(props){
    let {player, setPlayer, playerName, box, setBox, gameWinner} = props;
    
    useEffect(() => checkResult(box, playerName, gameWinner), [box, player]);

    // Array Of All The Three Positions' Combinations That Are Winning.
    let lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let checkResult = (box, playerName, gameWinner) => {
        for (let arr of lines){
            if (box[arr[0]] && box[arr[0]] == box[arr[1]] && box[arr[1]] == box[arr[2]]){
                let winner = playerName[`of${box[arr[0]]}`];
                console.log(`Winner Is ${winner}`);
                return gameWinner(winner);
            }
        }
        for (let ch of box){
            if (!ch) return;
        }
        console.log("Match Draw!!!");
        return gameWinner(null);
    }
    let setBoxValue = (idx, val) => {
        if (box[idx]) return;
        setBox((currBox) => {
            currBox[idx] = val;
            return currBox;
        });
        setPlayer(player === 'X' ? '0' : 'X');
    }

    return (
        <>
            <div className="gameBoard">
                <div className="boxRow">
                    <Box idx={0} box={box} setBoxValue={setBoxValue} player={player} />
                    <Box idx={1} box={box} setBoxValue={setBoxValue} player={player} />
                    <Box idx={2} box={box} setBoxValue={setBoxValue} player={player} />
                </div>
                <div className="boxRow">
                    <Box idx={3} box={box} setBoxValue={setBoxValue} player={player} />
                    <Box idx={4} box={box} setBoxValue={setBoxValue} player={player} />
                    <Box idx={5} box={box} setBoxValue={setBoxValue} player={player} />
                </div>
                <div className="boxRow">
                    <Box idx={6} box={box} setBoxValue={setBoxValue} player={player} />
                    <Box idx={7} box={box} setBoxValue={setBoxValue} player={player} />
                    <Box idx={8} box={box} setBoxValue={setBoxValue} player={player} />
                </div>
            </div>
        </>
    )
}

export default GameBoard;