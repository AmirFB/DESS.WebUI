import React from "react";
import EN from "../../assets/images/en.svg";
import IR from "../../assets/images/ir.svg";
import { useTranslation } from "react-i18next";

import "../../index.css";

export default function TopBar() {
  const [t, i18n] = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    console.log(language);
  };

  return (
    <div id="top-bar">
      <img
        onClick={() => changeLanguage("en")}
        className="language-button"
        src={EN}
      />
      <img
        onClick={() => changeLanguage("fa")}
        className="language-button"
        src={IR}
      />
    </div>
  );
}
