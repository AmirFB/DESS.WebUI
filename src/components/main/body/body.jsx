import React, { useState } from "react";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";

import "@progress/kendo-theme-material/dist/all.css";

import Home from "./home/home";
import Sidebar from "../sideBar/sideBar";
import Settings from "./settings/settings";
import Users from "./user/userList";
import Report from "./report/report";
import About from "./about";

import "./body.css";
import SiteList from "./site/siteList";

export default function Body() {
  const [selected, setSelected] = useState(0);

  function handleSelect(e) {
    setSelected(e.selected);
  }

  return (
    <div className="body-form">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="tabbar">
        <TabStrip selected={selected} onSelect={handleSelect}>
          <TabStripTab title="Home">
            <div>
              <Home />
            </div>
          </TabStripTab>

          <TabStripTab title="Sites">
            <SiteList></SiteList>
          </TabStripTab>

          <TabStripTab title="Settings">
            <Settings />
          </TabStripTab>

          <TabStripTab title="Users">
            <Users />
          </TabStripTab>

          <TabStripTab title="Report">
            <Report />
          </TabStripTab>

          <TabStripTab title="About">
            <About />
          </TabStripTab>
        </TabStrip>
      </div>
    </div>
  );
}
