import React from 'react';
import './ChooseCharacter.css'
import { Form, Radio } from 'semantic-ui-react'

const ChooseCharacter = ({ userCharacter, selectCharacter, gender, health, onSelectGender, onSelectHealth }) => {
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
            <div className="YourPhoto">
            {
                    userCharacter.name && <img className="YouLookPretty" src={userCharacter.image}></img>
                }
                {/* Due to "userCharacter.name &&", this only appears if we picked a character */}
            </div>
            <div className="Force">
                {
                    userCharacter.name && <p className="May">May the force be with you, {userCharacter.name}!</p>
                }
            </div>
            <div className="Gender">
                <p className="GenderText-1">What are you looking for?</p>
                <Form>
                    <Form.Field>
                        <p className="GenderText-2">You are currently looking for <b>{gender}</b>.</p>
                    </Form.Field>
                    {/* Gender radio buttons and text below*/}
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
                    {/* Dead or Alive radio buttons and text below*/}
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
            <div className="DeadWarning-1">
                {
                    health === 'dead and living' && <p>Are you sure you want to look for dead beings, {userCharacter.name}?</p>
                }
            </div>
            <div className="DeadWarning-2">
                {
                    health === 'dead' && <p>Are you sure you want to look for dead beings, {userCharacter.name}?</p>
                }
                 {/* Due to "health === 'dead' &&", this only appears if we select that we want to see dead characters */}
            </div>
            {
                    userCharacter.name && <div className="PreviewButton"><button><a href='/preview'>See some sexy space soldiers</a></button></div>
                }
                {/* This button will only appear once a character is picked */}
        </div>
    )
};

export default ChooseCharacter;