import { sum } from "./helper";

let reqSum = 56;

export default function WinningCondition(tickets){
    // Condition 01 : Sum Of Tickets Must Be Equal To reqSum.
    // return (sum(tickets) === 56)? true : false;

    // Condition 02 : All Digits Must Of Lootery Numbery Must Be Same.
    return tickets.every((num) => num === tickets[0]);
}