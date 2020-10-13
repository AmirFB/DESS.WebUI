import React from "react";
import PropType from "prop-types";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useTranslation } from "react-i18next";
import "@progress/kendo-theme-material/dist/all.css";

export default function ReportGrid(props) {
  const [t, i18n] = useTranslation();
  console.log(props.log);

  return (
    <Grid className="list-grid" data={props.log} id="report-grid">
      <Column field="id" title="ID" />
      <Column field="applied" title={t("report.applied")} width="100px" />
      <Column field="ipAddress" title={t("common.ipAdd")} width="130px" />
      <Column field="serialNo" title={t("common.serialNo")} width="100px" />
      <Column field="hvAlarm" title={t("report.hvAlarm")} width="70" />
      <Column field="lvAlarm" title={t("report.lvAlarm")} width="70" />
      <Column
        field="tamperAlarm"
        title={t("report.tamperAlarm")}
        width="100px"
      />
      <Column
        field="mainPowerFault"
        title={t("report.mainPowerFault")}
        width="100px"
      />
      <Column
        field="hvPowerFault"
        title={t("report.hvPowerFault")}
        width="100px"
      />
      <Column
        field="hvChargeFault"
        title={t("report.hvChargeFault")}
        width="100px"
      />
      <Column
        field="hvDischargeFault"
        title={t("report.hvDischargeFault")}
        width="100px"
      />
      <Column field="hvVoltage" title={t("report.hvVoltage")} width="100px" />
      <Column
        field="temperature"
        title={t("common.temperature")}
        width="100px"
      />
      <Column
        field="batteryStatus"
        title={t("report.batteryStatus")}
        width="100px"
      />
      <Column
        field="batteryLevel"
        title={t("report.batteryLevel")}
        width="100px"
      />
      <Column field="input1" title={t("common.input1")} width="100px" />
      <Column field="input2" title={t("common.input2")} width="100px" />
      <Column field="output1" title={t("common.output1")} width="100px" />
      <Column field="output2" title={t("common.output2")} width="100px" />
      <Column field="latitude" title={t("common.latitude")} width="100px" />
      <Column field="longitude" title={t("common.longitude")} width="100px" />
      <Column
        field="signalStrenght"
        title={t("report.signalStrenght")}
        width="100px"
      />
    </Grid>
  );
}

ReportGrid.propType = {
  log: PropType.array.isRequired,
};
