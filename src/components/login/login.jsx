import React from "react";

import "./login.css";

import LoginForm from "./loginForm";
import Intro from "./intro";

export default function Login() {
  return (
    <div>
      <div className="login">
        <Intro />
        <LoginForm />
      </div>
      <footer style={{ backgroundColor: "gainsboro", height: "100%" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;about &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2020 EHP Corp.
      </footer>
    </div>
  );
}
