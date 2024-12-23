import "../styles/Box.css";

function Box(props) {
    let {idx, box, setBoxValue, player} = props;
    
    return (
        <div className="boxCell" onClick={() => setBoxValue(idx, player)}>
            <div className="boxButton"> {box[idx]} </div>
        </div>
    )
}

export default Box;