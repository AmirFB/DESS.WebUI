import React from "react";
import PropType from "prop-types";
import { useTranslation } from "react-i18next";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";

export default function UserGrid(props) {
  const [t, i18n] = useTranslation();

  return (
    <Grid data={props.users} id="user-grid">
      <Column field="id" title="ID" />
      <Column field="username" title={t("users.username")} />
      <Column field="firstName" title={t("users.firstName")} />
      <Column field="lastName" title={t("users.lastName")} />
      <Column field="group" title={t("users.group")} />
    </Grid>
  );
}

UserGrid.propType = {
  users: PropType.array.isRequired,
};
