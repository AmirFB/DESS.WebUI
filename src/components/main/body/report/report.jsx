import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import "@progress/kendo-theme-material/dist/all.css";

import Reports from "./reports.json";

export default function Report() {
  return (
    <div>
      <div>Icons place</div>

      <Grid style={{ height: "100%" }} data={[...Reports]}>
        <Column field="id" title="ID" />
        <Column field="name" title="Name" />
        <Column field="siteID" title="Site ID" />
        <Column field="serialNum" title="Serial Number" />
        <Column field="phoneNum" title="Phone Number" />
        <Column field="ipAddress" title="IP Address" />
        <Column field="useGlobalInterval" title="Use global interval" />
        <Column field="interval" title="Interval" />
        <Column field="autoLocation" title="Auto Location" />
        <Column field="latitude" title="Latitude" />
        <Column field="longitude" title="Longitude" />
        <Column field="hvEnabled" title="HV enabled" />
        <Column field="lvEnabled" title="LV enabled" />
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
    </div>
  );
}
