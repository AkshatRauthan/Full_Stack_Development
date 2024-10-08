import { useState } from "react"

// Using Objects So That We Do Not Need To Create Saperate State Variables For All The Colors.
// Here We have Used (...) Or (Spread Symbol) So That We Can Pass All The Objects Inside The moves Indivisually.
// This Will Create A New Copy (On New Address) Of The Move Variable And Pass It Into setMoves().
// So That The Whole Component Can Be Rerendered. If We Will Not Do This The Component Will No Be Rerendered As The Whole Object
// Was Not Updated.
 
export function LudoBoard(){
    let [moves, setMoves] = useState({red: 0, yellow: 0, blue: 0, green: 0})
    console.log(moves);
    
    return (
        <div>
            Game Begins!
            <div className="board">
                <p>Blue Moves : {moves.blue} </p>
                <button style={{backgroundColor : "blue", color:"black"}} onClick={() => {
                    ++moves["blue"];
                    setMoves({...moves});
                }} >+1</button>
            </div>

            <div className="board">
                <p>Yellow Moves : {moves.yellow} </p>
                <button style={{backgroundColor : "yellow", color:"black"}} onClick={() => {
                    ++moves["yellow"];
                    setMoves({...moves});
                }} >+1</button>
            </div>

            <div className="board">
                <p>Green Moves : {moves.green} </p>
                <button style={{backgroundColor : "green", color:"black"}} onClick={() => {
                    ++moves["green"];
                    setMoves({...moves});
                }} >+1</button>
            </div>

            <div className="board">
                <p>Red Moves : {moves.red} </p>
                <button style={{backgroundColor : "red", color:"black"}} onClick={() => {
                    ++moves["red"];
                    setMoves({...moves});
                }}>+1</button>
            </div>
        </div>
    )
}