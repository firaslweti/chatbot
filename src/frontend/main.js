import React, { useState } from "react";
import Lottie from 'lottie-react';
import animationData from './json/bot.json'; 
import "./css/index.css" ; 

function Main() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            return;
        }
        
        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
        };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        // Simulate chatbot response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: 'This is a bot response to: ' + inputValue,
                sender: 'bot',
            };
            setMessages(prevMessages => [...prevMessages, botResponse]);
        }, 500); // Simulated delay for the bot response

        setInputValue('');
    };

    return (
        <div className="container">
            <div className="chatbot">
                <div className="messages">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.sender}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input 
                            className="inchat"
                            type="text" 
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="lottie">
                <Lottie animationData={animationData} />
            </div>
        </div>
    );
}

export default Main;

