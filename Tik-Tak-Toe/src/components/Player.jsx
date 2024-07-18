import { useState } from "react"



export default function Player ({initialName , symbol , isActive , onChangeName}){
const[isEditing, IsSetEditing] = useState(false)
const[playerName , SetPlayerName] = useState(initialName)


function onClickHandler (){
    IsSetEditing((isEditing) => !isEditing) ;
    if(isEditing){
        onChangeName(symbol , playerName) 

    }
}
function handleChange (event){
    SetPlayerName(event.target.value)
}

let EditableplayerName = <span className="player-name">{playerName}</span>;
let btnCaption = 'Edit'
    if(isEditing){
        EditableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption = 'Save'
    } else{
        <span className="player-name">{playerName}</span>
        btnCaption = 'Edit'
    }


    return <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {EditableplayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={onClickHandler} >{btnCaption}</button>
    </li>
}