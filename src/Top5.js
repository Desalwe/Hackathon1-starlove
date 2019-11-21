import React from 'react';
import './Top5.css'
import { Link } from 'react-router-dom'

const Top5 = ({ characters, chatImageClick}) => {
    return (
    <>
        {
        characters.map(character => {
        return (
            <div className="top5-container">
                <Link onClick={() => chatImageClick(character)} to="/chat">
                    <img  className="character-icon" key={character.image} src={character.image}></img>
                </Link>
                <p className="character-name" key={character.name}>{character.name}</p>
            </div>
        )
        })
    }
    </>
    )
}


export default Top5