import { useState} from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setplayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        setplayerName(event.target.value);
    }

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        onChangeName(symbol, playerName);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        editablePlayerName = (
        <input type="text" required value={playerName} onChange={handleChange} />
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </span>
        
      </li>
    )
}