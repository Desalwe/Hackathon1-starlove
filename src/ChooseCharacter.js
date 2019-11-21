import React from 'react';

const ChooseCharacter = ({ CharData, character, selectCharacter}) => {  
    return (
        <div>
            <h1>Please, pick your character</h1>
            <select onChange={selectCharacter} >
                <option value="">Please select...</option>
                <option value="Luke Skywalker">Luke Skywalker</option>
                <option value="Yoda">Yoda</option>
                <option value="Darth Vader">Darth Vader</option>
            </select>
            {
                character.name && <p>May the force be with you, {character.name}!</p>
            }
        </div>
    )
};

export default ChooseCharacter;