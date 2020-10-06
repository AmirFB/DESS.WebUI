import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import PropType from "prop-types";
import { useTranslation } from "react-i18next";

export default function SiteGrid(props) {
  const [t, i18n] = useTranslation();

  return (
    <Grid style={{ height: "100%" }} data={props.sites}>
      <Column field="id" title=" " />
      <Column field="name" title={t("site.siteId")} />
      <Column field="siteId" title="Site ID" />
      <Column field="serialNo" title={t("site.serialNo")} />
      <Column field="phoneNumber" title={t("site.phoneNumber")} />
      <Column field="ipAddress" title={t("site.ipAdd")} />
      <Column field="useGlobalIntervarl" title="Use global interval" />
      <Column field="interval" title={t("site.interval")} />
      <Column field="autoLocation" title={t("site.autoLoc")} />
      <Column field="latitude" title={t("common.latitude")} />
      <Column field="longitude" title={t("common.longitude")} />
      <Column field="hvEnabled" title="HV" />
      <Column field="lvEnabled" title="LV" />
      <Column field="hvPower" title={t("site.hvPow")} />
      <Column field="hvThreshold" title={t("site.hvTre")} />
      <Column field="hvRepeat" title={t("site.hvRep")} />
      <Column field="temperatureMin" title={t("site.temperatureMin")} />
      <Column field="temperatureMax" title={t("site.temperatureMax")} />
      <Column field="batteryMin" title={t("site.batteryMax")} />
      <Column field="batteryMax" title={t("site.batteryMin")} />
      <Column field="input1" title={t("common.input1")} />
      <Column field="input2" title={t("common.input2")} />
      <Column field="output1" title={t("common.output1")} />
      <Column field="output2" title={t("common.output2")} />
    </Grid>
  );
}

SiteGrid.propTypes = {
  sites: PropType.array.isRequired,
};
