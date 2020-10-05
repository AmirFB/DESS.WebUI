import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import PropType from "prop-types";
import { Trans, useTranslation } from "react-i18next";

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
      <Column field="hvEnabled" title="HV enabled" width="100px" />
      <Column field="lvEnabled" title="LV enabled" width="100px" />
      <Column field="hvPower" title="HV power" />
      <Column field="hvThreshold" title="HV treshold" />
      <Column field="hvRepeat" title="HV repeat" />
      <Column field="temperatureMin" title="Temperature min" />
      <Column field="temperatureMax" title="Temperature max" />
      <Column field="batteryMin" title="Battery min" />
      <Column field="batteryMax" title="Battery max" />
      <Column field="input1" title="Input 1" />
      <Column field="input2" title="Input 2" />
      <Column field="output1" title="Output 1" />
      <Column field="output2" title="Output 2" />
    </Grid>
  );
}

SiteGrid.propTypes = {
  sites: PropType.array.isRequired,
};
