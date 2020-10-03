import React from 'react';

import './login.css'

export default function Login() {

    return (
        <div className="login-form">
            Log in to system to use all about <b style={{ color: "blue" }}>DESS</b>
            <br />
          security tool
            <form action="" style={{ marginTop: 30 }}>
                <div className="label-highlight">Username</div>
                <div><input type="text" className="input-highlight" /></div>

                <div style={{ marginTop: 4 }}>
                    <div className="label-highlight">Password</div>
                    <div><input type="password" className="input-highlight" /></div>
                </div>

                <button className="login-button">Log in</button>
            </form>
        </div>
    );
} 