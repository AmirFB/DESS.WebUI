import React from "react";

import Body from "./body/Body";
import SideBar from "./sideBar/SideBar";

import "./body/body.css";

export default function Main() {
  return (
    <div className="body-form">
      <SideBar />
      <Body />
    </div>
  );
}
