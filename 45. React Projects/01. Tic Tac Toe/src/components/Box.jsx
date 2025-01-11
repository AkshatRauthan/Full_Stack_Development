import "../styles/Box.css";

function Box(props) {
    let {idx, box, setBox,  setBoxValue, player, setPlayer} = props;
    
    return (
        <div className="boxCell" onClick={() => setBoxValue(idx, player, box, setBox, player, setPlayer)}>
            <div className="boxButton"> {box[idx]} </div>
        </div>
    )
}

export default Box;