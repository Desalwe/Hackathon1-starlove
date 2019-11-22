import React from 'react';
import './Top5.css'
import { Link } from 'react-router-dom'

const Top5 = ({ characterPackages, chatImageClick }) => {
    return (
        <>
            {
                characterPackages.map(characterPackage => {
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