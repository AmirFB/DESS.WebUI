import React, { useState } from "react";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { useTranslation } from "react-i18next";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Home from "./home/home";
import Users from "./user/userList";
import Report from "./report/report";
import SiteList from "./site/siteList";
import SiteConfig from "./site/siteConfig";
import Profile from "./profile/profile";
import UserGroup from "./user/userGroupList";
import UserGroupsConfig from "./user/userGroupConfig";
import SiteGroupConfig from "./site/siteGroupConfig";
import siteGroupList from "./site/siteGroupList";

import HomeIcon from "@material-ui/icons/Home";
import MemoryIcon from "@material-ui/icons/Memory";
import PeopleIcon from "@material-ui/icons/People";
import HistoryIcon from "@material-ui/icons/History";
import PersonIcon from "@material-ui/icons/Person";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

import "@progress/kendo-theme-material/dist/all.css";
import "./body.css";

function Body({ userReducer, ...props }) {
  const [selected, setSelected] = useState(0);
  const [t, i18n] = useTranslation();

  function handleSelect(e) {
    setSelected(e.selected);
  }

  return (
    <div className="tab-bar">
      <TabStrip id="tabStrip" selected={selected} onSelect={handleSelect}>
        <TabStripTab
          title={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HomeIcon color="primary" />
              {t("common.home")}
            </div>
          }
        >
          <Redirect push to="" />
          <Route path="" component={Home} />
        </TabStripTab>

        <TabStripTab
          title={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MemoryIcon color="primary" />
              {t("common.sites")}
            </div>
          }
        >
          <Redirect push to="/siteList" />
          <Route exact path="/siteList" component={SiteList} />
          <Route path="/siteList/siteEdit" component={SiteConfig} />
        </TabStripTab>

        {(userReducer.currentUser.permissions
          ? userReducer.currentUser.permissions.includes("CanHandleSiteGroups")
          : false) && (
          <TabStripTab
            title={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <MemoryIcon color="primary" />
                {t("site.siteGroups")}
              </div>
            }
          >
            <Redirect push to="/siteGroups" />
            <Route exact path="/siteGroups" component={siteGroupList} />
            <Route path="/siteGroups/GroupEdit" component={SiteGroupConfig} />
          </TabStripTab>
        )}

        {/* <TabStripTab title={t("common.settings")}>
          <Redirect push to="/settings" />
          <Route path="/settings" component={Settings} />
        </TabStripTab> */}

        {(userReducer.currentUser.permissions
          ? userReducer.currentUser.permissions.includes("CanEditUsers")
          : false) && (
          <TabStripTab
            title={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <PeopleIcon color="primary" />
                {t("common.users")}
              </div>
            }
          >
            <Redirect push to="/users" />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/userEdit/" component={Profile} />
          </TabStripTab>
        )}

        {(userReducer.currentUser.permissions
          ? userReducer.currentUser.permissions.includes("CanHandleUserGroup")
          : false) && (
          <TabStripTab
            title={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <GroupWorkIcon color="primary" />
                {t("users.userGroups")}
              </div>
            }
          >
            <Redirect push to="/userGroups" />
            <Route exact path="/userGroups" component={UserGroup} />
            <Route
              path="/userGroups/userGroupEdit"
              component={UserGroupsConfig}
            />
          </TabStripTab>
        )}

        <TabStripTab
          title={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HistoryIcon color="primary" />
              {t("common.report")}
            </div>
          }
        >
          <Redirect push to="/report" />
          <Route path="/report" component={Report} />
        </TabStripTab>

        <TabStripTab
          title={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PersonIcon color="primary" />
              {t("common.profile")}
            </div>
          }
        >
          <Redirect push to="/profile" />
          <Route path="/profile" component={Profile} />
        </TabStripTab>

        {/* <TabStripTab title={t("common.about")}>
          <Redirect push to="/about" />
          <Route path="/about" component={About} />
        </TabStripTab>*/}
      </TabStrip>
    </div>
  );
}

SiteList.propTypes = {
  userReducer: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
