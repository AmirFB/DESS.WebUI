import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Select2 from "react-select";

import * as userActions from "../../../../redux/actions/userActions";
import * as siteActions from "../../../../redux/actions/siteActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Profile({
  userReducer,
  siteReducer,
  getGroups,
  getUser,
  saveUser,
  ...props
}) {
  const [t, i18n] = useTranslation();
  const [groupEdit, setGroupEdit] = useState(false);
  const [user, setUser] = useState({ ...userReducer.user });
  const [open, setOpen] = useState(false);
  const vertical = "bottom";
  const horizontal = "right";
  const history = useHistory();
  const [getFailed, setGetFailed] = useState(false);
  const [values, setValues] = useState();
  var siteGroups = [];

  useEffect(() => {
    if (props.location.state) {
      setGroupEdit(true);
      setUser({
        ...userReducer.users.find((u) => u.id === props.location.state.id),
      });
    } else {
      setGroupEdit(false);
      setUser({ ...userReducer.currentUser });
    }
    if (userReducer.hasError) handleClick();
  }, [userReducer]);

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

  const hanldeChange = (opt) => {
    setValues(opt);
  };

  siteReducer.groups.map((s) =>
    siteGroups.push({ value: s.id, label: s.name })
  );

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  function handleSaveUser() {
    if (user.password !== user.passwordConfirm) {
      setOpen(true);
      return;
    }

    saveUser(user);

    if (props.location.state) {
      if (userReducer.saveSuccessfull) {
        history.push({
          pathname: "/users",
        });
      }
    }
  }

  return (
    <Grid container direction="column">
      <Grid container>
        <Grid item>
          <TextField
            name="firstName"
            value={user.firstName}
            label={t("users.firstName")}
            onChange={handleChange}
          />
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <TextField
            name="lastName"
            value={user.lastName}
            label={t("users.lastName")}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {groupEdit && (
        <Grid item>
          <Select
            name="groupId"
            style={{ margin: "10px 0px", width: 100 }}
            value={user.groupId}
            onChange={handleChange}
          >
            {props.location.state.groups.map((group) => (
              <MenuItem value={group.id}>{group.title}</MenuItem>
            ))}
          </Select>
        </Grid>
      )}
      <Grid item>
        "Site Groups"
        <Select2
          isMulti
          style={{ margin: "10px 0px" }}
          options={siteGroups}
          value={values}
          onChange={hanldeChange}
          closeMenuOnSelect={false}
          //isDisabled={disabled}
        />
      </Grid>
      <Grid item>
        <TextField
          name={"phoneNumber"}
          value={user.phoneNumber}
          label={t("site.phoneNumber")}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          name={"username"}
          value={user.username}
          label={t("users.username")}
          onChange={handleChange}
        />
      </Grid>
      <Grid container>
        <Grid item>
          <TextField
            name={"password"}
            value={user.password}
            label={t("users.password")}
            onChange={handleChange}
          />
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <TextField
            name={"passwordConfirm"}
            value={user.passwordConfirm}
            label={t("users.password")}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid item style={{ margin: "60px 0px" }}>
        {/* {!userReducer.currentUser.permissions.includes("IsAlmighty") && ( */}
        <Button variant="contained" color="primary" onClick={handleSaveUser}>
          Save
        </Button>

        <Button
          variant="contained"
          style={{ margin: "5px 30px" }}
          onClick={() => {
            history.push({
              pathname: "/users/",
            });
          }}
        >
          {t("common.cancel")}
        </Button>

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

Profile.propTypes = {
  userReducer: PropTypes.object.isRequired,
  siteReducer: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
    siteReducer: state.siteReducer,
    getGroups: siteActions.getGroups,
  };
}

const mapDispatchToProps = {
  getUser: userActions.get,
  saveUser: userActions.save,
  getGroups: siteActions.getGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
