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
import ReportGrid from "./reportGrid";

import * as siteActions from "../../../../redux/actions/siteActions";

function Report({ siteReducer, getAllLog, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);

  useEffect(() => {
    getAllLog().catch((error) => {
      setGetFailed(true);

      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });
  }, [props.log]);

  return (
    <div className="list-div">
      {siteReducer.loading ? (
        <Loading />
      ) : siteReducer.hasError && siteReducer.log.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <ReportGrid log={siteReducer.log} />
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
              <span>{t("site.getReportsFailed")}</span>
            </Notification>
          )}
        </Zoom>
      </NotificationGroup>
    </div>
  );
}

Report.propTypes = {
  siteReducer: PropTypes.object.isRequired,
  getAllLog: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

const mapDispatchToProps = {
  getAllLog: siteActions.getAllLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
