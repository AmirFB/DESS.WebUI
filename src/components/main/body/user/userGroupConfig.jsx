import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

function UserGroupConfig({ userReducer, ...props }) {
  const [t, i18n] = useTranslation();
  const [group, setGroup] = useState({
    title: "",
    permissionIds: "",
    CanSecureSites: false,
  });

  const handleEdit = (userId, groups) => {};

  useEffect(() => {
    setGroup(userReducer.groups.find((g) => g.id === props.location.state.id));
  }, [userReducer.groups]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setGroup((prevGroup) => ({ ...prevGroup, [name]: value }));
  };

  const handlePermissionChange = (e) => {
    const { checked, value } = e.target;
    setGroup((prevGroup) => {
      const permissionIds = [...prevGroup.permissionIds];
      checked
        ? permissionIds.push(parseInt(value))
        : delete permissionIds[permissionIds.indexOf(parseInt(value))];
      return { ...prevGroup, permissionIds };
    });
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <TextField
          name="title"
          value={group.title}
          label={t("users.groupName")}
          onChange={handleChange}
        />
      </Grid>
      <Grid container>
        {userReducer.permissions.map((permission) => (
          <Grid item>
            <Checkbox
              value={permission.id}
              checked={group.permissionIds.includes(permission.id)}
              color="primary"
              onChange={handlePermissionChange}
            ></Checkbox>
            {t("users." + permission.title)}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

UserGroupConfig.propTypes = {
  userReducer: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserGroupConfig);
