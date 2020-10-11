import React from "react";
import ValidationInput from "../common/validationInput";

import { useTranslation } from "react-i18next";
import { Button } from "@progress/kendo-react-buttons";
import { Form, Field, FormElement } from "@progress/kendo-react-form";

import "./login.css";

export default function LoginForm() {
  const [t, i18n] = useTranslation();
  const handleSubmit = (dataItem) => {
    alert(JSON.stringify(dataItem, null, 2));
  };

  const usernameRegex = new RegExp("^[a-zA-Z0-9_]*$");
  const usernameValidator = (value) =>
    !value
      ? t("users.usernameNull")
      : !usernameRegex.exec(value)
      ? t("users.usernameWrong")
      : "";

  const passwordValidator = (value) => (!value ? t("users.passwordNull") : "");

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

          <Button primary className="login-button">
            {t("users.login")}
          </Button>
        </FormElement>
      )}
    />
  );
}
