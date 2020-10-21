import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as userActions from "../../../../redux/actions/userActions";

function Profile({ userReducer, getUser, ...props }) {
  const [t, i18n] = useTranslation();
  const [user, setUser] = useState({
    ...userReducer.currentUser,
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    if (!user.firstName) {
      getUser(userReducer.currentUser.id).then(() => {
        console.log(userReducer.currentUser);
        setUser(userReducer.currentUser);
      });
    }
  }, [userReducer.currentUser]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

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

      <Grid item>
        <TextField
          name="username"
          value={user.username}
          name="username"
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
      <Grid item style={{ margin: "50px 10px" }}>
        <button>Save</button>
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  userReducer: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getUser: userActions.get,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
