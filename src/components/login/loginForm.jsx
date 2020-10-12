import React, { useState } from "react";
import PropTypes from "prop-types";
import ValidationInput from "../common/validationInput";

import { useTranslation } from "react-i18next";
import { Button } from "@progress/kendo-react-buttons";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { connect } from "react-redux";
import { generatePasswordHash } from "../../helpers/cryptography";
import { Error } from "@progress/kendo-react-labels";

import * as userActions from "../../redux/actions/userActions";

import "./login.css";

function LoginForm({ siteReducer, authenticateUser, ...props }) {
  const [t, i18n] = useTranslation();
  const [failed, setFailed] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const usernameRegex = new RegExp("^[a-zA-Z0-9_]*$");
  const usernameValidator = (value) =>
    !value
      ? t("users.usernameNull")
      : !usernameRegex.exec(value)
      ? t("users.usernameWrong")
      : "";

  const passwordValidator = (value) => (!value ? t("users.passwordNull") : "");

  const handleSubmit = (data) => {
    setFailed(false);
    authenticateUser({
      ...data,
      password: generatePasswordHash(data.password),
    }).catch(error => {
      setFailed(true);
      setErrorMessage(error === 400 ? t("users.worngUsernamePassword") : t("common.connectionFailed"));
    });
  };

  return (
    <Form
      className="login-form"
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement className="login-form">
          <Field
            component={ValidationInput}
            label={t("users.username")}
            name="username"
            style={{ marginBottom: 10, width: "200px" }}
            minLength={4}
            required
            validator={usernameValidator}
          />

          <Field
            component={ValidationInput}
            type="password"
            label={t("users.password")}
            name="password"
            style={{ marginTop: 10, width: "200px" }}
            minLength={4}
            required
            validator={passwordValidator}
          />

      {failed && <Error>{errorMessage}</Error>}

          <Button primary className="login-button">
            {t("users.login")}
          </Button>
        </FormElement>
      )}
    />
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
