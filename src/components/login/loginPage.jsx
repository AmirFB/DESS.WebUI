import React from "react";

import "./login.css";

import Login from "./login";
import Intro from "./intro";

export default function LoginPage() {
  return (
    <div>
      <div className="login">
        <Intro />
        <Login />
      </div>
      <footer style={{ backgroundColor: "gainsboro", height: "100%" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;about &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2020 EHP Corp.
      </footer>
    </div>
  );
}
