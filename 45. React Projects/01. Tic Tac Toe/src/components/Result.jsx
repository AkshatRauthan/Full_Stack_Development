import Draw from './Draw.jsx';
import  "../styles/Result.css";
import Winner from './Winner.jsx';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

let Result = (props) => {
    let {score, winner, playerName, setWinner, setScore, setBox, restartGame, clearScore} = props;
    let [flag, setFlag] = useState(false);

    useEffect(() => {
        if (winner == "Draw" || winner == "Computer") return;
        console.log(playerName);
        console.log(winner);
        setTimeout(() => {
            setFlag(true);
            setTimeout(() => {
                setFlag(false);
            }, 1000);
        }, 90);
    }, []);

    let isDraw = false;
    if (winner == "Draw") isDraw = true;

    return (
        <div className="showResult">
            {flag && 
            <>
                <Fireworks autorun={{ speed: 1}} />
                <Fireworks autorun={{ speed: 1}} />
                <Fireworks autorun={{ speed: 1}} />
                <Fireworks autorun={{ speed: 1}} />
            </>
            }
            <div className="resultContainer">
                {isDraw && <Draw />}
                {!isDraw && <Winner winner={winner} />}
                <div className="resultButtonsContainer">
                    <Button variant="outlined" size="large" 
                    onClick={() => restartGame(winner, setWinner, setScore, setBox, playerName)}>Restart Game</Button><br /><br />
                    
                    <Button variant="outlined" size="large"
                    onClick={() => clearScore(score, setBox, setScore, setWinner)}>Clear Scores</Button>
                </div>
            </div>
        </div>
    )
}

export default Result;