import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import PropType from "prop-types";
import { useTranslation } from "react-i18next";
import "./site.css";

export default function SiteGrid(props) {
  const [t, i18n] = useTranslation();

  return (
    <div id="site-div">
      <div id="site-top-bar">Hello World!</div>
      <Grid data={props.sites} id="site-grid">
        <Column field="name" title={t("site.siteId")} width="100" />
        <Column field="siteId" title="Site ID" width="100" />
        <Column field="serialNo" title={t("site.serialNo")} width="100" />
        <Column field="phoneNumber" title={t("site.phoneNumber")} width="100" />
        <Column field="ipAddress" title={t("common.ipAdd")} width="130" />
        <Column field="interval" title={t("site.interval")} width="100" />
        <Column field="autoLocation" title={t("site.autoLoc")} width="100" />
        <Column field="hvEnabled" title="HV" width="100" />
        <Column field="lvEnabled" title="LV" width="100" />
        <Column field="input1" title={t("common.input1")} width="100" />
        <Column field="output1" title={t("common.output1")} width="100" />
      </Grid>
    </div>
  );
}

SiteGrid.propTypes = {
  sites: PropType.array.isRequired,
};
