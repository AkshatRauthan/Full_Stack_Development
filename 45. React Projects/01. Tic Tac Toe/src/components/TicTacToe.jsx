import {useState } from 'react';
import '../styles/TicTacToe.css';
import Result from './Result.jsx';
import GameBoard from './GameBoard.jsx';
import ChangeName from './ChangeNames.jsx';

function TicTacToe(){
    let [score, setScore] = useState({ofX: 0, of0: 0});
    let [playerName, setPlayerName] = useState({of0 :"Player 1", ofX: "Player 2"});
    let [winner, setWinner] = useState(null);
    let [box, setBox] = useState(Array(9).fill(null));
    let [changingName, setChangingName] = useState(true);

    let gameWinner = (currwinner) => {
        if (!currwinner) setWinner((winner) => "Draw");
        else setWinner((winner) => currwinner);
    }
    let changeName = (flag) => {
        setChangingName(flag);
    }
    let restartGame = () => {
        if (winner && winner != "Draw"){
            setScore((currScore) => {
                if (winner == playerName.ofX) currScore.ofX++;
                else currScore.of0++;
                return currScore;
            })
        }
        setWinner((currWinner) => {
            let winner = null;
            return winner;
        });
        setBox((currBox) => Array(9).fill(null));
    }
    let startNewGame = () => {
        setBox((currBox) => Array(9).fill(null));
        setScore((currScore) =>  {
            score.ofX = 0;
            score.of0 = 0;
            return score;
        });
        setWinner((currWinner) => {
            let winner = null;
            return winner;
        });
    }

    return (
        <>
            {winner && <Result winner={winner} restartGame={restartGame} clearScore={startNewGame}/>}
            
            <p className="gameHeading"> Tic Tac Toe</p>

            {changingName &&
            <ChangeName playerName={playerName} setPlayerName={setPlayerName} changeName={changeName}/> }
            
            {!changingName && <>
                <div className="scoreBoard">
                    <span className="scoreCard">{playerName.of0} : {score.of0}</span>
                    <span className="scoreCard">{playerName.ofX} : {score.ofX}</span>
                </div>

                <GameBoard playerName={playerName} box={box} setBox={setBox} gameWinner={gameWinner} />
                
                <div className="buttonsContainer">
                    <button className="button" size="medium" onClick={() => changeName(true)}> Change Name </button>
                    <button className="button" size="medium" onClick={restartGame}> Reset Game </button>
                </div>
            </>}
        </>
    )
}

export default TicTacToe;