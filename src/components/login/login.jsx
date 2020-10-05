import React from "react";
import { useTranslation } from "react-i18next";

import "./login.css";

export default function Login() {
  const [t, i18n] = useTranslation();

  return (
    <div className="login-form">
      Log in to system to use all about <b style={{ color: "blue" }}>DESS</b>
      <br />
      security tool
      <form action="" style={{ marginTop: 30 }}>
        <div className="label-highlight">{t("users.userName")}</div>
        <div>
          <input type="text" className="input-highlight" />
        </div>

        <div style={{ marginTop: 4 }}>
          <div className="label-highlight">{t("users.pass")}</div>
          <div>
            <input type="password" className="input-highlight" />
          </div>
        </div>

        <button className="login-button">Log in</button>
      </form>
    </div>
  );
}
