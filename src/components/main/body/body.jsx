import React, { useState } from "react";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";

import "@progress/kendo-theme-material/dist/all.css";

import Home from "./home/home";
import Sidebar from "../sideBar/sideBar";

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

          <TabStripTab title="Tallinn">
            <div>
              <p>
                Tallinn is the capital and largest city of Estonia. It is
                situated on the northern coast of the country, on the shore of
                the Gulf of Finland, 80 km (50 mi) south of Helsinki, east of
                Stockholm and west of Saint Petersburg. From the 13th century
                until 1918 (and briefly during the Nazi occupation of Estonia
                from 1941 to 1944), the city was known as Reval. Tallinn
                occupies an area of 159.2 km2 (61.5 sq mi) and has a population
                of 443,894. Approximately 32% of Estonia's total population
                lives in Tallinn.
              </p>
              <p>
                Tallinn was founded in 1248, but the earliest human settlements
                are over 5,000 years old, making it one of the oldest capital
                cities of Northern Europe. Due to its strategic location, the
                city became a major trade hub, especially from the 14th to the
                16th century, when it grew in importance as part of the
                Hanseatic League.
              </p>
            </div>
          </TabStripTab>

          <TabStripTab title="Sydney">jfasjfisaj</TabStripTab>
        </TabStrip>
      </div>
    </div>
  );
}
