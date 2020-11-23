import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import "@progress/kendo-theme-material/dist/all.css";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Zoom } from "@progress/kendo-react-animation";
import Loading from "../../../common/loading";
import SiteGroupGrid from "./siteGroupGrid";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";

import * as siteActions from "../../../../redux/actions/siteActions";

function SiteGroupList({ siteReducer, getGroups, getPermissions, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);

  useEffect(() => {
    if (siteReducer.groups.length === 0)
      getGroups().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });
  }, []);

  function handleRefresh() {
    getGroups().catch((error) => {
      setGetFailed(true);

      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });
  }

  return (
    <>
      <IconButton
        aria-label="addGroup"
        color="primary"
        size="medium"
        onClick={handleRefresh}
      >
        <RefreshIcon fontSize="inherit" />
      </IconButton>
      {siteReducer.loading ? (
        <Loading />
      ) : siteReducer.hasError && siteReducer.groups.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <SiteGroupGrid
          groups={siteReducer.groups}
          permissions={siteReducer.permissions}
        />
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
              onClose={() => setGetFailed(false)}
            >
              <span>{t("site.getSitesFailed")}</span>
            </Notification>
          )}
        </Zoom>
      </NotificationGroup>
    </>
  );
}

SiteGroupList.propTypes = {
  siteReducer: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired,
  //getPermissions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

const mapDispatchToProps = {
  getGroups: siteActions.getGroups,
  //getPermissions: siteActions.getPermissions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteGroupList);
