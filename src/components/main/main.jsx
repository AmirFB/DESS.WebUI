import React from "react";

import Body from "./body/body";
import SideBar from "./sideBar/sideBar";

import "./body/body.css";

export default function Main() {
  return (
    <div className="body-form">
      <SideBar />
      <Body />
    </div>
  );
}
