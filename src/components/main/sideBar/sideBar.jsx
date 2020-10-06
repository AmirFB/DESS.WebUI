import React from "react";

import "./sideBar.css";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-DlGO0iOtP5EAQqF415Zra-IWzHWIE97-2g&usqp=CAU"
          alt="img"
          width="30px"
        />
        <input type="text" placeholder="Type site name here" />
      </div>
    </div>
  );
}
