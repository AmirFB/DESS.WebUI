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
import UserGrid from "./userGrid";

import * as userActions from "../../../../redux/actions/userActions";

function UserList({ userReducer, getUsers, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);

  useEffect(() => {
    getUsers().catch((error) => {
      setGetFailed(true);

      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });
  }, [props.users]);

  return (
    <>
      <h2>Icons place</h2>
      {userReducer.loading ? (
        <Loading />
      ) : userReducer.hasError && userReducer.users.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <UserGrid users={userReducer.users} />
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
    </>
  );
}

UserList.propTypes = {
  userReducer: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getUsers: userActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
