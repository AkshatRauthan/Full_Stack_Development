import { useState } from "react";
import "../styles/TicTacToe.css";
import Result from "./Result.jsx";
import GameBoard from "./GameBoard.jsx";
import SetConfiguration from "./SetConfiguration.jsx";
import {
    gameWinner,
    changeName,
    restartGame,
    startNewGame,
} from "../gameLogic/TicTacToe.js";

function TicTacToe() {
    let [player, setPlayer] = useState("0");
    let [winner, setWinner] = useState(null);
    let [gameMode, setGameMode] = useState(""); // "computer" or "offline"
    let [difficulty, setDifficulty] = useState(""); // "easy", "medium" or "hard"
    let [box, setBox] = useState(Array(9).fill(null));
    let [score, setScore] = useState({ ofX: 0, of0: 0 });
    let [changingConfig, setchangingConfig] = useState(true);
    let [playerName, setPlayerName] = useState({
        of0: "Player 1",
        ofX: "Player 2",
    });

    return (
        <>
            <p className="gameHeading"> Tic&nbsp; Tac &nbsp;Toe</p>

            {winner && (
                <Result
                    score={score}
                    winner={winner}
                    playerName={playerName}
                    setWinner={setWinner}
                    setScore={setScore}
                    setBox={setBox}
                    restartGame={restartGame}
                    clearScore={startNewGame}
                />
            )}

            {changingConfig && (
                <SetConfiguration
                    playerName={playerName}
                    setPlayerName={setPlayerName}
                    changeName={changeName}
                    gameMode={gameMode}
                    difficulty={difficulty}
                    setGameMode={setGameMode}
                    setDifficulty={setDifficulty}
                    setchangingConfig={setchangingConfig}
                />
            )}

            {!changingConfig && (
                <>
                    <div className="scoreBoard" id="playerTurn">
                        <span className="scoreCard">
                            {player == "0"
                                ? "0 / " + playerName.of0
                                : "X / " + playerName.ofX}
                            's Turn
                        </span>
                    </div>

                    <div className="scoreBoard">
                        <span className="scoreCard">
                            {playerName.of0} : {score.of0}
                        </span>
                        <span className="scoreCard">
                            {playerName.ofX} : {score.ofX}
                        </span>
                    </div>

                    <GameBoard
                        player={player}
                        setPlayer={setPlayer}
                        playerName={playerName}
                        box={box}
                        setBox={setBox}
                        gameWinner={gameWinner}
                        setWinner={setWinner}
                        gameMode={gameMode}
                        difficulty={difficulty}
                    />

                    <div className="buttonsContainer">
                        <button
                            className="button"
                            size="medium"
                            onClick={() => changeName(true, setchangingConfig)}
                        >
                            {" "}
                            Change Name{" "}
                        </button>
                        <button
                            className="button"
                            size="medium"
                            onClick={() =>
                                restartGame(winner, setWinner, setScore, setBox, playerName)
                            }
                        >
                            {" "}
                            Restart Game{" "}
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

export default TicTacToe;