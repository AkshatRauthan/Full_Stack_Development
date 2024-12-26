
import Draw from './Draw.jsx';
import  "../styles/Result.css";
import Winner from './Winner.jsx';
import Button from '@mui/material/Button';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

let Result = (props) => {
    let {winner, restartGame, clearScore} = props;

    let isDraw = false;
    if (winner == "Draw") isDraw = true;

    return (
        <div className="showResult">
            <Fireworks autorun={{ speed: 1}} />
            <Fireworks autorun={{ speed: 1}} />
            <Fireworks autorun={{ speed: 1}} /> 
            <div className="resultContainer">
                {isDraw && <Draw />}
                {!isDraw && <Winner winner={winner} />}
                <div className="resultButtonsContainer">
                    <Button variant="outlined" size="large" 
                    onClick={() => restartGame()}>Restart Game</Button><br /><br />
                    
                    <Button variant="outlined" size="large"
                    onClick={() => clearScore()}>Clear Scores</Button>
                </div>
            </div>
        </div>
    )
}

export default Result;