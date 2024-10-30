function generateTickets(n){
    let tickets = [];
    for (let i=0; i<n; i++) tickets.push(Math.floor(Math.random()*10));
    return tickets;
}

function sum(ticket){
    return ticket.reduce((total, num) => total + num, 0);
}

export {generateTickets, sum};