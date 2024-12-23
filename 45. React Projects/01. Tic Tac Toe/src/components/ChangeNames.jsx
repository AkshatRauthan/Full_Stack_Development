import '../styles/ChangeNames.css';

let ChangeName = (props) => {
    let {playerName, setPlayerName, changeName } = props;

    let onChange = (str, event) => {
        let value = event.target.value;
        setPlayerName((currName)=> {
            let newName;
            if (str == "0") newName = {of0: value, ofX: currName.ofX};
            else newName = {ofX: value, of0: currName.of0};
            return newName;
        })
    }

    return (
        <>
            <p className="inputTitle">Enter The Names Of Both Players </p>

            <div className="inputContainer">
                <input type="text" value={playerName.of0} onChange={(event) => onChange("0", event)} />
                <input type="text" value={playerName.ofX} onChange={(event) => onChange("X", event)} />
            </div>

            <button className="changeNameButton" onClick={() => changeName(false)} >Submit </button>
        </>
    )
}

export default ChangeName;