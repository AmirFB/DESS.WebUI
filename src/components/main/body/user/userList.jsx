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
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";

import * as userActions from "../../../../redux/actions/userActions";

function UserList({ userReducer, getUsers, getGroups, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);

  useEffect(() => {
    if (userReducer.users.length === 0)
      getUsers().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });

    getGroups().catch((error) => {
      setGetFailed(true);

      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });
  }, [userReducer.users]);

  function handleRefresh() {
    getUsers().catch((error) => {
      setGetFailed(true);

      if (!getFailed) {
        setTimeout(() => {
          setGetFailed(false);
        }, 10000);
      }
    });

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
        aria-label="refresh"
        color="primary"
        size="medium"
        onClick={handleRefresh}
      >
        <RefreshIcon fontSize="inherit" />
      </IconButton>
      {userReducer.loading ? (
        <Loading />
      ) : userReducer.hasError && userReducer.users.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <UserGrid users={userReducer.users} groups={userReducer.groups} />
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
              <span>{t("user.getUsersFailed")}</span>
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
  getGroups: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getUsers: userActions.getAll,
  getGroups: userActions.getGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
