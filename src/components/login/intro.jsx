import React from "react";

import "./login.css";

export default function Intro() {
  return (
    <div className="intro-form">
      <div className="intro-top">
        <b>DESS</b>
        <br />
        Distributed Enterprise Security System
      </div>

      <div className="intro-middle">
        <em>How to use This Program</em>
        <br />
        <em>What's the Meaning of DESS</em>
        <br />
        <em>How Electric-Fence Works</em>
        <br />
        <a href="https://www.emenhesarpouya.com">www.emenhesarpouya.com</a>
      </div>

      <div>
        <div className="intro-bottom">
          <img
            src="https://emenhesarpouya.com/wp-content/uploads/2019/12/Unt-itled-1.jpg"
            alt="Emen Hesar"
            width={70}
            height={50}
          />
          <br />
          <p
            style={{
              fontSize: 10,
              marginTop: -4,
              marginLeft: -6,
              color: "#fff",
            }}
          >
            Emen hesar pouya
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Irancell_Logo.gif"
          alt="Irancell"
          width={55}
          height={60}
        />
      </div>
    </div>
  );
}
