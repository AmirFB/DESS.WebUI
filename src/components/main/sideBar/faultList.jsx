import React from "react";

import { List, ListItem, Grid } from "@material-ui/core";
import { faultType } from "../../../types/siteTypes";
import { useTranslation } from "react-i18next";

import * as colors from "@material-ui/core/colors";

export default function FaultList({ site }) {
  const [t, i18n] = useTranslation();
  return (
    <List style={{ maxWidth: "300px", overflow: "auto" }}>
      {site.faults.map((fault) => {
        return (
          <ListItem key={fault.id}>
            <Grid key={"grid" + fault.id} container direction="row" spacing={1}>
              <Grid key={"type-grid" + fault.id} item>
                {() => {
                  const color =
                    new Date(fault.obviatedOn).getFullYear < 1000
                      ? colors.red[500]
                      : colors.blue[500];

                  switch (fault.type) {
                    case faultType.Hv:
                      return (
                        <span key={"span" + fault.id} style={{ color }}>
                          HV
                        </span>
                      );
                    case faultType.LV:
                      return <span style={{ color }}>LV</span>;
                    case faultType.Input1:
                      return <span style={{ color }}>site.inputs[0].name</span>;
                    case faultType.Input2:
                      return <span style={{ color }}>site.inputs[1].name</span>;
                    case faultType.Power:
                      return <span style={{ color }}>{t("fault.power")}</span>;
                    case faultType.Tamper:
                      return <span style={{ color }}>{t("fault.tamper")}</span>;
                  }
                }}
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
}
