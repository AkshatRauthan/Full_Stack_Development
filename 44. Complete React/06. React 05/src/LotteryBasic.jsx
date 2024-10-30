import './app.css'
import { useState } from 'react';

export default function LotteryBasic(){

    let [ticket, setTicket] = useState([0, 0, 0]);
    let [result, toogleResult] = useState(false);
    let currSum = 0;

    let generateRandomNumbers =  () => {
        let newTicket = [];
        currSum = 0;
        for(let i = 0; i < 3; i++){
            newTicket.push(Math.floor(Math.random() * 10));
            currSum += newTicket[i];
        };
        setTicket(newTicket);
    }

    let checkResult = (result) => {
        if ((result && currSum != 15) || (!result && currSum == 15)){
            toogleResult(!result);
        }
    }

    let intiateNewTurn = () => {
        generateRandomNumbers();
        checkResult(result);
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <h3>Get A Sum Of 15 To Win The Game</h3><br />
            <div className='Ticket'>
                <button>{ticket[0]}</button>
                <button>{ticket[1]}</button>
                <button>{ticket[2]}</button>
            </div><br />
            {!result && <button onClick={intiateNewTurn}> Try Again! </button>}<br/>
            <div className='showResult'>
                {result && <h3>Congratulations! You Won!</h3>}
            </div>
        </div>
    )
}