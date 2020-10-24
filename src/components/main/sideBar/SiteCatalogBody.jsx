import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import blue from "@material-ui/core/colors/blue";

import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";

export default function SiteCatalogBody({ site, ...props }) {
  const [t, i18n] = useTranslation();

  const statusText = (state) =>
    state ? (
      <span style={{ color: "red" }}>{t("catalog.fault")}</span>
    ) : (
      <span style={{ color: "green" }}>{t("catalog.ok")}</span>
    );

  return (
    <Grid
      container
      direction="column"
      className="site-catalog-body"
      style={{
        backgroundColor: blue[100],
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
          <span style={{ color: "blue" }}>{site.hvPower}%</span>
        </Grid>
        <Grid item lg>
          {t("catalog.voltage")}:&nbsp;
          <span style={{ color: "blue" }}>{site.status.hvVoltage}</span>
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
                    ? "red"
                    : site.status.temperature < site.temperatureMin
                    ? "cyan"
                    : "blue",
              }}
            >
              {site.status.temperature}
            </span>
          </Grid>
          <Grid item lg>
            {t("catalog.battery")}:&nbsp;
            <span
              style={{
                color:
                  site.status.batteryLevel < site.batteryMin ? "red" : "ble",
              }}
            >
              {site.status.batteryLevel}
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
