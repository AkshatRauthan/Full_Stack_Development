let Winner = ({winner}) => {
    let flag = (winner == "Computer");
    
    return (
        <>
            {!flag && (
                <>
                    <h1 className="resultHeadings"> Congratulations {winner}! </h1>
                    <h1 className="resultHeadings"> You Won! </h1>
                </>
            )}

            {flag && (
                <>
                    <h1 className="resultHeadings"> You Lost! </h1>
                    <h1 className="resultHeadings"> Better Luck Next Time! </h1>
                </>
            )}
        </>
    )
}

export default Winner;