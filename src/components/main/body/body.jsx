import React, { useState } from "react";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { useTranslation } from "react-i18next";
import "@progress/kendo-theme-material/dist/all.css";
import Home from "./home/home";
import Settings from "./settings/settings";
import Users from "./user/userList";
import Report from "./report/report";
import About from "./about";
import "./body.css";
import SiteList from "./site/siteList";

export default function Body() {
  const [selected, setSelected] = useState(0);
  const [t, i18n] = useTranslation();

  function handleSelect(e) {
    setSelected(e.selected);
  }

  return (
    <div className="tab-bar">
      <TabStrip id="tabStrip" selected={selected} onSelect={handleSelect}>
        <TabStripTab title={t("common.home")}>
          <Home />
        </TabStripTab>

        <TabStripTab title={t("common.sites")}>
          <SiteList />
        </TabStripTab>

        <TabStripTab title={t("common.settings")}>
          <Settings />
        </TabStripTab>

        <TabStripTab title={t("common.users")}>
          <Users />
        </TabStripTab>

        <TabStripTab title={t("common.report")}>
          <Report />
        </TabStripTab>

        <TabStripTab title={t("common.about")}>
          <About />
        </TabStripTab>
      </TabStrip>
    </div>
  );
}
