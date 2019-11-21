import React from 'react';
import './Preview.css'

const Preview = ({ charData }) => {


    return (
        <div className="container">
            {charData.map(char => {
                return (
                    <div key={char.name} className="polaroid">
                        <img src={char.image} alt="character images" />
                        <p>{char.name}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Preview

// return console.log(this.state.CharData[0].gender)