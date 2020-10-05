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

      <Grid style={{ height: "100%" }} data={[...Reports]}>
        <Column field="id" title="ID" />
        <Column field="applied" title={t("report.applied")} width={100} />
        <Column field="ipAddress" title={t("common.ipAdd")} width={100} />
        <Column field="serialNo" title={t("common.serialNo")} width={100} />
        <Column field="hvAlarm" title={t("report.hvAlarm")} width={100} />
        <Column field="lvAlarm" title={t("report.lvAlarm")} width={100} />
        <Column
          field="tamperAlarm"
          title={t("report.tamperAlarm")}
          width={100}
        />
        <Column
          field="mainPowerFault"
          title={t("report.mainPowerFault")}
          width={100}
        />
        <Column
          field="hvPowerFault"
          title={t("report.hvPowerFault")}
          width={100}
        />
        <Column
          field="hvChargeFault"
          title={t("report.hvChargeFault")}
          width={100}
        />
        <Column
          field="hvDischargeFault"
          title={t("report.hvDischargeFault")}
          width={100}
        />
        <Column field="hvVoltage" title={t("report.hvVoltage")} width={100} />
        <Column
          field="temperature"
          title={t("common.temperature")}
          width={100}
        />
        <Column
          field="batteryStatus"
          title={t("report.batteryStatus")}
          width={100}
        />
        <Column
          field="batteryLevel"
          title={t("report.batteryLevel")}
          width={100}
        />
        <Column field="input1" title={t("common.input1")} width={100} />
        <Column field="input2" title={t("common.input2")} width={100} />
        <Column field="output1" title={t("common.output1")} width={100} />
        <Column field="output2" title={t("common.output2")} width={100} />
        <Column field="latitude" title={t("common.latitude")} width={100} />
        <Column field="longitude" title={t("common.longitude")} width={100} />
        <Column
          field="signalStrenght"
          title={t("report.signalStrenght")}
          width={100}
        />
      </Grid>
    </div>
  );
}
