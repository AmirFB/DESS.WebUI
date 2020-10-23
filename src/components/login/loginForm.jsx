import React, { useState } from "react";
import PropTypes from "prop-types";
import ValidationInput from "../common/validationInput";

import { useTranslation } from "react-i18next";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { generatePasswordHash } from "../../helpers/cryptography";
import { Error } from "@progress/kendo-react-labels";
import "./login.css";

import * as userActions from "../../redux/actions/userActions";

function LoginForm({ siteReducer, authenticateUser, ...props }) {
  const [t, i18n] = useTranslation();
  const [failed, setFailed] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  const usernameRegex = new RegExp("^[a-zA-Z0-9_]*$");
  const usernameValidator = (value) =>
    !value
      ? t("users.usernameNull")
      : !usernameRegex.exec(value)
      ? t("users.usernameWrong")
      : "";

  const passwordValidator = (value) => (!value ? t("users.passwordNull") : "");

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
    const { value, name } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    setFailed(false);
    authenticateUser({
      ...user,
      password: generatePasswordHash(user.password),
    }).catch((error) => {
      setFailed(true);
      setErrorMessage(
        error === 400
          ? t("users.worngUsernamePassword")
          : t("common.connectionFailed")
      );
    });
    e.preventDefault();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid item>
          <TextField
            name="username"
            label={t("users.username")}
            style={{ margin: "10px 0px" }}
            onChange={handleChange}
            error={error}
          />
        </Grid>
        <Grid item>
          <TextField
            name="password"
            label={t("users.password")}
            type="password"
            style={{ margin: "10px 0px" }}
            onChange={handleChange}
            error={error}
          />
        </Grid>
        <Grid>{failed && <Error>{errorMessage}</Error>}</Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "50px" }}
          >
            {t("users.login")}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

LoginForm.propTypes = {
  userReducer: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  authenticateUser: userActions.authenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
