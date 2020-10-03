import React from 'react';

import './login.css';

export default function Intro() {
    return (
        <div className="intro-form">
            <div style={{ display: "inline-block" }}>
                <img src="https://image.flaticon.com/icons/svg/28/28660.svg" alt="Top" width={50} height={30} />
                <div className="info">
                    <div className="name"><b>DESS</b></div>
                    <div className="name2">Distributed Enterprise Security System</div>
                </div>
            </div>

            <div className="intro-middle">
                <em>How to use This Program</em>
                <br />
                <em>What's the Meaning of DESS</em>
                <br />
                <em>How Electric-Fence Works</em>
            </div>

            <div className="intro-url">www.emenhesarpouya.com</div>

            <div>
                <div className="intro-bottom">
                    <img src="https://emenhesarpouya.com/wp-content/uploads/2019/12/Unt-itled-1.jpg" alt="Emen Hesar" width={70} height={50} />
                    <br />
                    <p style={{ fontSize: 10, marginTop: -4, marginLeft: 14, color: "#fff" }}>Emen hesar pouya</p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Irancell_Logo.gif" alt="Irancell" width={55} height={60} />
            </div>

        </div>
    );
}