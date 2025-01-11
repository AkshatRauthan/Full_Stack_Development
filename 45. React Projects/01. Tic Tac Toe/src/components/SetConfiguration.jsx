import "../styles/SetConfiguration.css";
import { useState } from "react";

let SetConfiguration = (props) => {
    let [flag, setFlag] = useState(false);
    let {
        playerName,
        setPlayerName,
        changeName,
        gameMode,
        difficulty,
        setGameMode,
        setDifficulty,
        setchangingConfig,
    } = props;

    // Handles changes in player names
    let onChange = (str, event) => {
        let value = event.target.value;
        setPlayerName((currName) => {
            let newName;
            if (str === "0") newName = { of0: value, ofX: currName.ofX };
            else newName = { ofX: value, of0: currName.of0 };
            return newName;
        });
    };

    // Handles difficulty level selection
    let onDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    return (
        <>
            {/* Step 1: Choose Game Mode */}
            {!gameMode && (
                <>
                    <p className="modeTitle">Choose &nbsp;Game&nbsp; Mode</p>
                    <div className="modeContainer">
                        <button
                            className="modeButton"
                            onClick={() => setGameMode("computer")}
                        >
                            Play with Computer
                        </button>
                        <button
                            className="modeButton"
                            onClick={() => setGameMode("offline")}
                        >
                            Two Player Game
                        </button>
                    </div>
                </>
            )}

            {/* Step 2: Enter Player Names */}
            {gameMode === "computer" && (
                <>
                    {!flag && (
                        <>
                            <p className="inputTitle">Enter &nbsp;Your&nbsp; Name</p>
                            <div className="inputContainer">
                                <input
                                    type="text"
                                    value={playerName.of0}
                                    onChange={(event) => onChange("0", event)}
                                />
                            </div>
                            <button
                                className="changeNameButton"
                                disabled={!playerName.of0}
                                onClick={() => setFlag(true)}
                            >
                                &nbsp;Submit&nbsp;
                            </button>
                        </>
                    )}

                    {flag && (
                        <>
                            <p className="inputTitle">
                                Choose &nbsp;Difficulty&nbsp; Level
                            </p>
                            <div className="inputContainer">
                                <select
                                    value={difficulty}
                                    onChange={onDifficultyChange}
                                    className="difficultyDropdown"
                                >
                                    <option value="">&nbsp;Select Difficulty&nbsp;</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                            <button
                                className="changeNameButton"
                                disabled={!difficulty}
                                onClick={() => {
                                    setPlayerName({
                                        ...playerName,
                                        ofX: "Computer",
                                    });
                                    changeName(false, setchangingConfig);
                                }}
                            >
                                &nbsp;Submit&nbsp;
                            </button>
                        </>
                    )}
                </>
            )}

            {gameMode === "offline" && (
                <>
                    <p className="inputTitle">Enter The Names Of Players</p>
                    <div className="inputContainer">
                        <input
                            type="text"
                            value={playerName.of0}
                            onChange={(event) => onChange("0", event)}
                        />
                        <input
                            type="text"
                            value={playerName.ofX}
                            onChange={(event) => onChange("X", event)}
                        />
                    </div>
                    <button
                        className="changeNameButton"
                        disabled={!playerName.of0 || !playerName.ofX}
                        onClick={() => changeName(false, setchangingConfig)}
                    >
                        Submit
                    </button>
                </>
            )}
        </>
    );
};

export default SetConfiguration;
