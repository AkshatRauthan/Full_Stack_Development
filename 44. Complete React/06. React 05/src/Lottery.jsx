import { useState } from 'react';
import {generateTickets} from './helper.js'
import Ticket from "./Ticket";
import './Lottery.css';

export default function Lottery({n, winningCondition}){
    let [ticket, setTicket] = useState(generateTickets(n));
    let isWinning = winningCondition(ticket);

    let buyTickets = () => {
        setTicket(generateTickets(n));
    }

    return (
    <>
      {isWinning && <h2> Congratulations! You Won The Lottery! </h2>}
      <div className='Lottery'><Ticket ticket={ticket} /></div><br />
      <button onClick={buyTickets}>
        {(!isWinning)? "Buy New Ticket" : "Play Again"}
      </button>
    </>
    )
}