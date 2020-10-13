import React from "react";

import "./login.css";

import LoginForm from "./loginForm";
import Intro from "./intro";

export default function Login() {
  return (
    <div id="login-body">
      <div className="login">
        <Intro />
        <LoginForm />
      </div>
      <footer style={{ backgroundColor: "gainsboro", flex: "1" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;about &nbsp;&nbsp;&nbsp;© 2020 EHP Corp.
      </footer>
    </div>
  );
}
