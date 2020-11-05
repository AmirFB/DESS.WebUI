import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

import { batteryStatusType } from "../../../types/siteTypes";

import * as colors from "@material-ui/core/colors";

import Battery20RoundedIcon from "@material-ui/icons/Battery20Rounded";
import Battery30RoundedIcon from "@material-ui/icons/Battery30Rounded";
import Battery50RoundedIcon from "@material-ui/icons/Battery50Rounded";
import Battery60RoundedIcon from "@material-ui/icons/Battery60Rounded";
import Battery80RoundedIcon from "@material-ui/icons/Battery80Rounded";
import Battery90RoundedIcon from "@material-ui/icons/Battery90Rounded";
import BatteryCharging20RoundedIcon from "@material-ui/icons/BatteryCharging20Rounded";
import BatteryCharging30RoundedIcon from "@material-ui/icons/BatteryCharging30Rounded";
import BatteryCharging50RoundedIcon from "@material-ui/icons/BatteryCharging50Rounded";
import BatteryCharging60RoundedIcon from "@material-ui/icons/BatteryCharging60Rounded";
import BatteryCharging80RoundedIcon from "@material-ui/icons/BatteryCharging80Rounded";
import BatteryCharging90RoundedIcon from "@material-ui/icons/BatteryCharging90Rounded";
import BatteryChargingFullRoundedIcon from "@material-ui/icons/BatteryChargingFullRounded";
import BatteryFullRoundedIcon from "@material-ui/icons/BatteryFullRounded";
import BatteryAlertRoundedIcon from "@material-ui/icons/BatteryAlertRounded";

export default function BatteryIcon({ site }) {
  const status = site.status;
  const level = status.batteryLevel;
  const state = status.batteryStatus;
  const color =
    state === batteryStatusType.Fault
      ? colors.red[500]
      : level === 100
      ? colors.green[500]
      : level > site.battteryMin
      ? colors.blue[500]
      : level > site.battteryMin / 2
      ? colors.yellow[500]
      : colors.red[500];

  return (
    <SvgIcon style={{ color: color, fontSize: "14px" }}>
      {state === batteryStatusType.Fault ? (
        <BatteryAlertRoundedIcon />
      ) : level === 100 ? (
        state === batteryStatusType.Charging ? (
          <BatteryChargingFullRoundedIcon />
        ) : (
          <BatteryFullRoundedIcon />
        )
      ) : level >= 90 ? (
        state === batteryStatusType.Charging ? (
          <BatteryCharging90RoundedIcon />
        ) : (
          <Battery90RoundedIcon />
        )
      ) : level >= 80 ? (
        state === batteryStatusType.Charging ? (
          <BatteryCharging80RoundedIcon />
        ) : (
          <Battery80RoundedIcon />
        )
      ) : level >= 60 ? (
        state === batteryStatusType.Charging ? (
          <BatteryCharging60RoundedIcon />
        ) : (
          <Battery60RoundedIcon />
        )
      ) : level >= 50 ? (
        state === batteryStatusType.Charging ? (
          <BatteryCharging50RoundedIcon />
        ) : (
          <Battery50RoundedIcon />
        )
      ) : level >= 30 ? (
        state === batteryStatusType.Charging ? (
          <BatteryCharging30RoundedIcon />
        ) : (
          <Battery30RoundedIcon />
        )
      ) : state === batteryStatusType.Charging ? (
        <BatteryCharging20RoundedIcon />
      ) : (
        <Battery20RoundedIcon />
      )}
    </SvgIcon>
  );
}
