import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useTranslation } from "react-i18next";

import "@progress/kendo-theme-material/dist/all.css";

import Reports from "./reports.json";

export default function Report() {
  const [t, i18n] = useTranslation();

  return (
    <div>
      <div>Icons place</div>

      <Grid data={[...Reports]}>
        <Column field="id" title="ID" />
        <Column field="applied" title={t("report.applied")} />
        <Column field="ipAddress" title={t("common.ipAdd")} />
        <Column field="serialNo" title={t("common.serialNo")} />
        <Column field="hvAlarm" title={t("report.hvAlarm")} />
        <Column field="lvAlarm" title={t("report.lvAlarm")} />
        <Column field="tamperAlarm" title={t("report.tamperAlarm")} />
        <Column field="mainPowerFault" title={t("report.mainPowerFault")} />
        <Column field="hvPowerFault" title={t("report.hvPowerFault")} />
        <Column field="hvChargeFault" title={t("report.hvChargeFault")} />
        <Column field="hvDischargeFault" title={t("report.hvDischargeFault")} />
        <Column field="hvVoltage" title={t("report.hvVoltage")} />
        <Column field="temperature" title={t("common.temperature")} />
        <Column field="batteryStatus" title={t("report.batteryStatus")} />
        <Column field="batteryLevel" title={t("report.batteryLevel")} />
        <Column field="input1" title={t("common.input1")} />
        <Column field="input2" title={t("common.input2")} />
        <Column field="output1" title={t("common.output1")} />
        <Column field="output2" title={t("common.output2")} />
        <Column field="latitude" title={t("common.latitude")} />
        <Column field="longitude" title={t("common.longitude")} />
        <Column field="signalStrenght" title={t("report.signalStrenght")} />
      </Grid>
    </div>
  );
}
