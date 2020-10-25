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

import * as userActions from "../../../../redux/actions/userActions";

function Profile({ userReducer, getUser, saveUser, ...props }) {
  const [t, i18n] = useTranslation();
  const [groupEdit, setGroupEdit] = useState(false);
  const [user, setUser] = useState({ ...userReducer.user });
  const history = useHistory();

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
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  function handleSaveUser() {
    saveUser(user);
    history.push({
      pathname: "/users",
    });
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
        <Button variant="contained" color="primary" onClick={handleSaveUser}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  userReducer: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getUser: userActions.get,
  saveUser: userActions.save,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
