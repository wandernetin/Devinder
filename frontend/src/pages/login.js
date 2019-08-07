import React, { useState } from 'react';
import './login.css';
import logo from '../assets/logo.svg'


export default function Login() {
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Devinder" />
                <input 
                    value={username}
                    onChange={e => setUsername(e.target.value)} 
                    placeholder="Type your Github user"/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}