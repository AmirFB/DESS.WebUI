import React from "react";

import { useTranslation } from "react-i18next";

export default function Loading(props) {
  const [t, i18next] = useTranslation();

  return (
    <div className="k-loading-mask">
      <span className="k-loading-text">{t("common.loading")}</span>
      <div className="k-loading-image"></div>
      <div className="k-loading-color"></div>
    </div>
  );
}
