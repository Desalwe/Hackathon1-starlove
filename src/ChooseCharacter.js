import React from 'react';
import { Radio } from 'semantic-ui-react';

const ChooseCharacter = ({ character, selectCharacter, gender, onChange}) => {  
    return (
        <div className="CharacterSelectionContainer">
            <div className="PickingChar">
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
            <p>What are you looking for?</p>
            <div className="ButtonParty">
                <span>
                    Male: <Radio checked={gender.male} onChange={() => onChange('male')}/>
                    Female: <Radio checked={gender.female} onChange={() => onChange('female')}/>
                </span>
            </div>
        </div>
    )
};

export default ChooseCharacter;