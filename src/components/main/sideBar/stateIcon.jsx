import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

import { getState } from "../../../types/siteTypes";
import { statusType } from "../../../types/siteTypes";

import * as colors from "@material-ui/core/colors";

import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const getColor = (state) => {
  switch (state) {
    case statusType.Clear:
      return colors.green[500];
    case statusType.Warning:
      return colors.amber[500];
    case statusType.Fault:
      return colors.red[500];
    case statusType.Null:
      return colors.grey[500];
  }
};

const getIcon = (state) => {
  switch (state) {
    case statusType.Clear:
      return <CheckBoxIcon />;
    case statusType.Warning:
      return <WarningIcon />;
    case statusType.Fault:
      return <ErrorIcon />;
    case statusType.Null:
      return <HourglassEmptyIcon />;
  }
};

export default function StateIcon({ site }) {
  const state = getState(site);

  return (
    <SvgIcon style={{ color: getColor(state), fontSize: "14px" }}>
      {getIcon(state)}
    </SvgIcon>
  );
}
