import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import SiteGrid from "./siteGrid";
import Loading from "../../../common/loading";

import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Zoom } from "@progress/kendo-react-animation";
import { Button } from "@progress/kendo-react-buttons";
import { Redirect } from "react-router-dom";

import * as siteActions from "../../../../redux/actions/siteActions";

import "@progress/kendo-theme-material/dist/all.css";

function SiteList({ siteReducer, userReducer, getSites, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [permission, setPermission] = useState();
  const history = useHistory();

  useEffect(() => {
    if (siteReducer.sites.length === 0)
      getSites().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });
    setPermission(userReducer.currentUser.permissions.includes("CanEditSites"));
  }, [props.sites]);

  function handleAddSite() {
    history.push({
      pathname: "/siteList/siteEdit",
    });
  }

  return (
    <div className="list-div">
      <Button onClick={handleAddSite} primary>
        {t("site.addSite")}
      </Button>
      {siteReducer.loading ? (
        <Loading />
      ) : siteReducer.hasError && siteReducer.sites.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <SiteGrid sites={siteReducer.sites} permission={permission} />
      )}
      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: "flex-start",
          flexWrap: "wrap-reverse",
        }}
      >
        <Zoom enter={true} exit={true}>
          {getFailed && (
            <Notification
              type={{ style: "error", icon: true }}
              closable={true}
              onClose={() => this.setGetFailed(false)}
            >
              <span>{t("site.getSitesFailed")}</span>
            </Notification>
          )}
        </Zoom>
      </NotificationGroup>
    </div>
  );
}

SiteList.propTypes = {
  siteReducer: PropTypes.object.isRequired,
  getSites: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getSites: siteActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteList);
