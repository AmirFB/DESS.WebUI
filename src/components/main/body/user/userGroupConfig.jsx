import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function UserGroupConfig({ userReducer, ...props }) {
  const [t, i18n] = useTranslation();
  const [group, setGroup] = useState({
    title: "",
    permissionIds: "",
    CanSecureSites: false,
  });
  const [open, setOpen] = useState(false);
  const vertical = "bottom";
  const horizontal = "right";

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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleClose} severity="error">
            {t("error.saveError")}
          </Alert>
        </Snackbar>
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
