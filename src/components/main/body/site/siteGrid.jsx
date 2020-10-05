import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import PropType from "prop-types";
import { useTranslation } from "react-i18next";

export default function SiteGrid(props) {
  const [t, i18n] = useTranslation();

  return (
    <Grid style={{ height: "100%" }} data={props.sites}>
      <Column field="id" title=" " width="40px" />
      <Column field="name" title={t("site.siteId")} width="90px" />
      <Column field="siteId" title="Site ID" width="120px" />
      <Column field="serialNo" title={t("site.serialNo")} width="120px" />
      <Column field="phoneNumber" title={t("site.phoneNumber")} width="120px" />
      <Column field="ipAddress" title={t("site.ipAdd")} width="120px" />
      <Column
        field="useGlobalIntervarl"
        title="Use global interval"
        width="150px"
      />
      <Column field="interval" title={t("site.interval")} width="80px" />
      <Column field="autoLocation" title={t("site.autoLoc")} width="90px" />
      <Column field="latitude" title={t("common.latitude")} width="110px" />
      <Column field="longitude" title={t("common.longitude")} width="110px" />
      <Column field="hvEnabled" title="HV" width="100px" />
      <Column field="lvEnabled" title="LV" width="100px" />
      <Column field="hvPower" title={t("site.hvPow")} width="110px" />
      <Column field="hvThreshold" title={t("site.hvTre")} width="110px" />
      <Column field="hvRepeat" title={t("site.hvRep")} width="110px" />
      <Column
        field="temperatureMin"
        title={t("site.temperatureMin")}
        width="110px"
      />
      <Column
        field="temperatureMax"
        title={t("site.temperatureMax")}
        width="110px"
      />
      <Column field="batteryMin" title={t("site.batteryMax")} width="110px" />
      <Column field="batteryMax" title={t("site.batteryMin")} width="110px" />
      <Column field="input1" title={t("common.input1")} width="110px" />
      <Column field="input2" title={t("common.input2")} width="110px" />
      <Column field="output1" title={t("common.output1")} width="110px" />
      <Column field="output2" title={t("common.output2")} width="110px" />
    </Grid>
  );
}

SiteGrid.propTypes = {
  sites: PropType.array.isRequired,
};
