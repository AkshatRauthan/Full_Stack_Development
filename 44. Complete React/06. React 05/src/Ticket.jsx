import TicketNum from "./TicketNum";
import './Ticket.css'
export default function Ticket({ticket}){
    return (
    <>
        <h2>Your Lottery Number : </h2>
        <div className="Ticket">
            {
                ticket.map((num, idx) => <TicketNum num={num} key={idx} />)
            }
        </div>
    </>)
}