import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import SignalCellularOffRoundedIcon from "@material-ui/icons/SignalCellularOffRounded";
import SignalCellular0BarRoundedIcon from "@material-ui/icons/SignalCellular0BarRounded";
import SignalCellular1BarRoundedIcon from "@material-ui/icons/SignalCellular1BarRounded";
import SignalCellular2BarRoundedIcon from "@material-ui/icons/SignalCellular2BarRounded";
import SignalCellular3BarRoundedIcon from "@material-ui/icons/SignalCellular3BarRounded";
import SignalCellular4BarRoundedIcon from "@material-ui/icons/SignalCellular4BarRounded";

import * as colors from "@material-ui/core/colors";

export default function SignalIcon({ strength }) {
  const color =
    strength === 0
      ? colors.red[500]
      : strength < 3
      ? colors.amber[500]
      : colors.blue[500];

  return (
    <SvgIcon style={{ fontSize: "14px", color: color }}>
      {strength == 0 ? (
        <SignalCellularOffRoundedIcon />
      ) : strength === 1 ? (
        <SignalCellular0BarRoundedIcon />
      ) : strength === 2 ? (
        <SignalCellular1BarRoundedIcon />
      ) : strength === 3 ? (
        <SignalCellular2BarRoundedIcon />
      ) : strength === 4 ? (
        <SignalCellular3BarRoundedIcon />
      ) : (
        <SignalCellular4BarRoundedIcon />
      )}
    </SvgIcon>
  );
}
