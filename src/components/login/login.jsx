import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

import "./login.css";

export default function Login() {
  const [t, i18n] = useTranslation();

  return (
    <div className="login-form">
      Log in to system to use all about <b style={{ color: "blue" }}>DESS</b>
      <br />
      security tool
      <form action="" style={{ marginTop: 30 }}>
        <div>
          <Input
            name="Username"
            label={t("users.userName")}
            style={{ width: "200px" }}
            pattern={"[A-Za-z]+"}
            minLength={5}
            required={true}
          />
        </div>

        <div style={{ marginTop: 15 }}>
          <div>
            <Input
              name="Password"
              label={t("users.pass")}
              style={{ width: "200px" }}
              pattern={"[A-Za-z]+"}
              minLength={5}
              required={true}
            />
          </div>
        </div>

        <Button primary className="login-button">
          {t("users.logIn")}
        </Button>
      </form>
    </div>
  );
}
