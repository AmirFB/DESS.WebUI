import React from "react";
import PropTypes from "prop-types";
import SiteGrid from "./siteGrid";

import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Zoom } from "@progress/kendo-react-animation";
import Loading from "../../../common/loading";

import * as siteActions from "../../../../redux/actions/siteActions";

import "@progress/kendo-theme-material/dist/all.css";

function SiteList({ siteReducer, getSites, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);

  useEffect(() => {
    getSites().catch((error) => {
      setGetFailed(true);

      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });
  }, [props.sites]);

  return (
    <div className="list-div">
      <h1>{t("common.sites")}</h1>
      {siteReducer.loading ? (
        <Loading />
      ) : siteReducer.hasError && siteReducer.sites.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <SiteGrid sites={siteReducer.sites} />
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
  };
}

const mapDispatchToProps = {
  getSites: siteActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteList);
