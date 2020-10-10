import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useTranslation } from "react-i18next";
import "@progress/kendo-theme-material/dist/all.css";
import Users from "./users.json";
import "./user.css";

export default function UsersList() {
  const [t, i18n] = useTranslation();

  return (
    <div id="user-div">
      <div id="user-top-bar">Icons place</div>

      <Grid data={[...Users]} id="user-grid">
        <Column field="ID" title="ID" />
        <Column field="Username" title={t("users.userName")} />
        <Column field="Firstname" title={t("users.firstName")} />
        <Column field="Lastname" title={t("users.lastName")} />
        <Column field="Group" title={t("users.group")} />
      </Grid>
    </div>
  );
}
