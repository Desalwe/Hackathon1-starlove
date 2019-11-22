import React from 'react';
import './Chat.css'
import heart from './heart.jpg'

const Chat = ({ chattingCharacter, userCharacter, showCurrentlyTyping, sendMessageNow, sentMessages, userMessage }) => {
    return (
        <div className="chat-all-container">
            <div className="chat-img-container">
                <img className="image-icon" src={userCharacter.image}></img>
                <img className="heart-icon" src={heart}></img>
                <img className="image-icon" src={chattingCharacter.image}></img>
            </div>
            <div className="chat-messages">
                {sentMessages.map(message => {
                    return <p className="chat-message">{message}</p>
                })}
            </div>
            <div className="textarea-container">
                <form onSubmit={sendMessageNow}>
                    <input value={userMessage} onChange={showCurrentlyTyping} className="chat-textarea"></input>
                    <button className="chat-button">Send</button>
                </form>
            </div>
        </div>
    )
}


export default Chat