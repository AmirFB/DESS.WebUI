import React, { useState } from "react";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { useTranslation } from "react-i18next";
import { Route, Redirect } from "react-router-dom";

import Home from "./home/home";
import Settings from "./settings/settings";
import Users from "./user/userList";
import Report from "./report/report";
import About from "./about";
import SiteList from "./site/siteList";
import SiteConfig from "./site/siteConfig";

import "@progress/kendo-theme-material/dist/all.css";
import "./body.css";

export default function Body() {
  const [selected, setSelected] = useState(0);
  const [path, setPath] = useState("/");
  const [t, i18n] = useTranslation();

  function handleSelect(e) {
    setSelected(e.selected);
  }

  return (
    <div className="tab-bar">
      <TabStrip id="tabStrip" selected={selected} onSelect={handleSelect}>
        <TabStripTab title={t("common.home")}>
          <Redirect push to="/home" />
          <Route path="/home" component={Home} />
        </TabStripTab>

        <TabStripTab title={t("common.sites")}>
          <Redirect push to="/siteList" />
          <Route exact path="/siteList" component={SiteList} />
          <Route path="/siteList/siteEdit" component={SiteConfig} />
        </TabStripTab>

        <TabStripTab title={t("common.settings")}>
          <Redirect push to="/settings" />
          <Route path="/settings" component={Settings} />
        </TabStripTab>

        <TabStripTab title={t("common.users")}>
          <Redirect push to="/users" />
          <Route path="/users" component={Users} />
        </TabStripTab>

        <TabStripTab title={t("common.report")}>
          <Redirect push to="/report" />
          <Route path="/report" component={Report} />
        </TabStripTab>

        <TabStripTab title={t("common.about")}>
          <Redirect push to="/about" />
          <Route path="/about" component={About} />
        </TabStripTab>
      </TabStrip>
    </div>
  );
}
