import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import SignalIcon from "./signalIcon";
import FaultList from "./faultList";

import { useTranslation } from "react-i18next";

import * as colors from "@material-ui/core/colors";

import "bootstrap/dist/css/bootstrap.min.css";

export default function SiteCatalogBody({ site, onMap, ...props }) {
  const [t, i18n] = useTranslation();

  const statusText = (state) =>
    state ? (
      <span style={{ color: colors.red[500] }}>{t("catalog.fault")}</span>
    ) : (
      <span style={{ color: colors.green[500] }}>{t("catalog.ok")}</span>
    );

  return (
    <Grid
      container
      direction="column"
      className="site-catalog-body"
      style={{
        backgroundColor: onMap ? "transparent" : colors.cyan[50],
      }}
    >
      <Grid
        container
        item
        direction="row"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid item lg>
          HV:&nbsp;
          {statusText(site.status.hvAlarm)}
        </Grid>
        <Grid item lg>
          LV:&nbsp;
          {statusText(site.status.lvAlarm)}
        </Grid>
        <Grid item lg>
          Tamper:&nbsp;
          {statusText(site.status.tamperAlarm)}
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        item
        direction="row"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid item lg>
          {t("catalog.power")}:&nbsp;
          <span style={{ color: colors.blue[500] }}>{site.hvPower}%</span>
        </Grid>
        <Grid item lg>
          {t("catalog.hvVoltage")}:&nbsp;
          <span style={{ color: colors.blue[500] }}>
            {site.status.hvVoltage}
          </span>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid item lg>
          {t("catalog.mainPower")}:&nbsp;
          {statusText(site.status.mainPowerFault)}
        </Grid>
        <Grid item lg>
          {t("catalog.hvCharge")}:&nbsp;{statusText(site.status.hvChargeFault)}
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid item lg>
          {t("catalog.hvPower")}:&nbsp;{statusText(site.status.hvPowerFault)}
        </Grid>
        <Grid item lg>
          {t("catalog.hvDischarge")}:&nbsp;
          {statusText(site.status.hvDischargeFault)}
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="baseline"
      >
        <Grid
          container
          item
          direction="row"
          justify="space-between"
          alignItems="baseline"
        >
          <Grid item lg>
            {t("catalog.temperature")}:&nbsp;
            <span
              style={{
                color:
                  site.status.temperature > site.temperatureMax
                    ? colors.red[500]
                    : site.status.temperature < site.temperatureMin
                    ? colors.cyan[500]
                    : colors.green[500],
                fondSize: "14px",
              }}
            >
              {site.status.temperature}°C
            </span>
          </Grid>
          <Grid item lg>
            {t("catalog.battery")}:&nbsp;
            <span
              style={{
                color:
                  site.status.batteryLevel < site.batteryMin
                    ? colors.red[500]
                    : colors.blue[500],
              }}
            >
              %{site.status.batteryLevel}
            </span>
          </Grid>
        </Grid>
        <Grid item lg>
          {t("catalog.signalStrength")}:&nbsp;
          <SignalIcon strength={site.status.signalStrength} />
        </Grid>
      </Grid>
      <Divider />
      <Grid container item direction="row" justify="space-between">
        <Grid item lg>
          <Grid container direction="column">
            <Grid item lg>
              {t("common.input1")}:&nbsp;
              <span
                style={{
                  color: site.status.inputs[0]
                    ? colors.red[500]
                    : colors.blue[500],
                }}
              >
                {site.status.inputs[0] ? t("common.on") : t("common.off")}
              </span>
            </Grid>
            <Grid item lg>
              {t("common.input2")}:&nbsp;
              <span
                style={{
                  color: site.status.inputs[1]
                    ? colors.red[500]
                    : colors.blue[500],
                }}
              >
                {site.status.inputs[1] ? t("common.on") : t("common.off")}
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg>
          <Grid container direction="column">
            <Grid item lg>
              {t("common.output1")}:&nbsp;
              <span
                style={{
                  color: site.status.outputs[0]
                    ? colors.red[500]
                    : colors.blue[500],
                }}
              >
                {site.status.outputs[0] ? t("common.on") : t("common.off")}
              </span>
            </Grid>
            <Grid item lg>
              {t("common.output2")}:&nbsp;
              <span
                style={{
                  color: site.status.outputs[1]
                    ? colors.red[500]
                    : colors.blue[500],
                }}
              >
                {site.status.outputs[1] ? t("common.on") : t("common.off")}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <FaultList site={site}></FaultList>
      </Grid>
    </Grid>
  );
}
