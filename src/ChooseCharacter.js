import React from 'react';
import { Form, Radio } from 'semantic-ui-react'

const ChooseCharacter = ({ character, selectCharacter, gender, health, onSelectGender, onSelectHealth}) => {  
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
            <div className="Gender">
                <Form>
                    <Form.Field>
                        You are currently looking for <b>{gender}</b>.
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Male and Female'
                            name='radioGroup'
                            value='both genders'
                            checked={gender === 'both genders'}
                            onChange={onSelectGender}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Male'
                            name='radioGroup'
                            value='males only'
                            checked={gender === 'males only'}
                            onChange={onSelectGender}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Female'
                            name='radioGroup'
                            value='females only'
                            checked={gender === 'females only'}
                            onChange={onSelectGender}
                        />
                    </Form.Field>
                </Form>
            </div>
            <div className="Health">
                <Form>
                    <Form.Field>
                        You are currently looking for <b>{health}</b> beings.
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Dead and Alive'
                            name='radioGroup'
                            value='dead and living'
                            checked={health === 'dead and living'}
                            onChange={onSelectHealth}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Alive'
                            name='radioGroup'
                            value='living'
                            checked={health === 'living'}
                            onChange={onSelectHealth}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Dead'
                            name='radioGroup'
                            value='dead'
                            checked={health === 'dead'}
                            onChange={onSelectHealth}
                        />
                    </Form.Field>
                </Form>
                {
                    health === 'dead' && <p>Are you sure you want to look for dead beings, {character.name}?</p>
                }
            </div>
        </div>
    )
};

export default ChooseCharacter;