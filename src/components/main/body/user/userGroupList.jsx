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
import UserGroupGrid from "./userGroupGrid";

import * as userActions from "../../../../redux/actions/userActions";

function UserGroupList({ userReducer, getGroups, getPermissions, ...props }) {
  const [t, i18n] = useTranslation();
  const [getFailed, setGetFailed] = useState(false);

  useEffect(() => {
    if (userReducer.groups.length === 0)
      getGroups().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });

    if (userReducer.permissions.length === 0)
      getPermissions().catch((error) => {
        setGetFailed(true);

        if (!getFailed) {
          setTimeout(() => {
            setGetFailed(false);
          }, 10000);
        }
      });
  }, [userReducer.permissions]);

  return (
    <>
      {userReducer.loading ? (
        <Loading />
      ) : userReducer.hasError && userReducer.groups.length === 0 ? (
        <h3>{t("common.getFailed")}</h3>
      ) : (
        <UserGroupGrid
          groups={userReducer.groups}
          permissions={userReducer.permissions}
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
              onClose={() => this.setGetFailed(false)}
            >
              <span>{t("user.getUsersFailed")}</span>
            </Notification>
          )}
        </Zoom>
      </NotificationGroup>
    </>
  );
}

UserGroupList.propTypes = {
  userReducer: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired,
  getPermissions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getGroups: userActions.getGroups,
  getPermissions: userActions.getPermissions,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGroupList);
