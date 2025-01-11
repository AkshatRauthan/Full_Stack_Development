import Box from "./Box.jsx";
import "../styles/GameBoard.css";
import { checkResult, setBoxValue, computerMove } from "../gameLogic/GameBoard.js";
import { useEffect } from "react";

function GameBoard(props){
    let {player, setPlayer, playerName, box, setBox, gameWinner, setWinner, gameMode, difficulty} = props;
    
    if (gameMode == "computer" && player == "X") computerMove(box, setBox, setBoxValue, player, setPlayer, difficulty);
    useEffect(() => checkResult(box, playerName, gameWinner, setWinner));

    return (
        <>
            <div className="gameBoard">
                <div className="boxRow">
                    <Box idx={0} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                    <Box idx={1} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                    <Box idx={2} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                </div>
                <div className="boxRow">
                    <Box idx={3} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                    <Box idx={4} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                    <Box idx={5} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                </div>
                <div className="boxRow">
                    <Box idx={6} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                    <Box idx={7} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                    <Box idx={8} box={box} setBox={setBox} setBoxValue={setBoxValue} player={player} setPlayer={setPlayer} />
                </div>
            </div>
        </>
    )
}

export default GameBoard;