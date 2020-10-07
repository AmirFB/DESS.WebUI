import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import "./sideBar.css";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-DlGO0iOtP5EAQqF415Zra-IWzHWIE97-2g&usqp=CAU"
          alt="img"
          width="24px"
        />

        <Input
          name="SiteName"
          label="Enter site name"
          style={{ width: "80%" }}
          pattern={"[A-Za-z]+"}
        />
      </div>
      <div>
        <PanelBar>
          <PanelBarItem title={"Active Sites"}>
            <PanelBarItem title={"Site 1"} />
            <PanelBarItem title={"Site 2"}>
              <PanelBarItem title={"Q1"} />
              <PanelBarItem title={"Q2"} />
              <PanelBarItem title={"Q3"} />
              <PanelBarItem title={"Q4"} />
            </PanelBarItem>
            <PanelBarItem title={"Site 3"} />
          </PanelBarItem>

          <PanelBarItem title="Offline Sites">
            <PanelBarItem title="Site 4" />
            <PanelBarItem title="Site 5" />
            <PanelBarItem title="Site 6" />
          </PanelBarItem>

          <PanelBarItem title="Not Deffined">
            <PanelBarItem title="Site 7" />
            <PanelBarItem title="Site 8" />
          </PanelBarItem>
        </PanelBar>
      </div>
    </div>
  );
}
