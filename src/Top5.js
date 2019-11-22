import React from 'react';
import './Top5.css'
import { Link } from 'react-router-dom'



const Top5 = ({ characterPackages, chatImageClick }) => {
    let filteredCharacterPackages = characterPackages.filter(characterPackage => {
        return(characterPackage.rating)
    })
    console.log(filteredCharacterPackages)
    let sortedCharacterPackages = filteredCharacterPackages.sort((a, b) => b.rating - a.rating)
    let top5CharacterPackages = sortedCharacterPackages.slice(0, 5)


    return (
        <>
            {
                top5CharacterPackages.map(characterPackage => {
                    return (
                        <div className="top5-container">
                            <Link onClick={() => chatImageClick(characterPackage)} to="/chat">
                                <img className="character-icon" key={characterPackage.image} src={characterPackage.image}></img>
                            </Link>
                            <p className="character-name" key={characterPackage.name}>{characterPackage.name}</p>
                        </div>
                    )
                })
            }
        </>
    )
}


export default Top5