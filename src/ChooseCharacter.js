import React from 'react';
import './ChooseCharacter.css'
import { Form, Radio } from 'semantic-ui-react'

const ChooseCharacter = ({ character, selectCharacter, gender, health, onSelectGender, onSelectHealth }) => {
    return (
        <div className="CharacterSelectionContainer">
            <div className="PickingChar">
                <h1>Pick your character</h1>
                <select onChange={selectCharacter} >
                    <option value="">Please select...</option>
                    <option value="Luke Skywalker">Luke Skywalker</option>
                    <option value="Yoda">Yoda</option>
                    <option value="Darth Vader">Darth Vader</option>
                </select>
            </div>
            <div className="Force">
                {
                    character.name && <p>May the force be with you, {character.name}!</p>
                }
            </div>
            <div className="Gender">
                <p className="GenderText-1">What are you looking for?</p>
                <Form>
                    <Form.Field>
                        <p className="GenderText-2">You are currently looking for <b>{gender}</b>.</p>
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
                        <p className="HealthText">You are currently looking for <b>{health}</b> beings.</p>
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
            </div>
            <div className="DeadWarning">
                {
                    health === 'dead' && <p>Are you sure you want to look for dead beings, {character.name}?</p>
                }
            </div>
        </div>
    )
};

export default ChooseCharacter;