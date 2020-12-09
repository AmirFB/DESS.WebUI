import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import { DataGrid } from "@material-ui/data-grid";
import { dateToString } from "../../../../helpers/dateTime";

import { useTranslation } from "react-i18next";
import { faultType } from "../../../../types/siteTypes";

export default function ReportGrid({ sites, ...props }) {
  const [t, i18n] = useTranslation();
  const [rows, setRows] = useState([]);

  const columns = [
    {
      field: "id",
      headerName: t("report.site"),
      width: 100,
      headerAlign: "center",
      renderCell: (params) => {
        const site = sites.find((s) => s.id === params.getValue("siteId"));
        return site ? site.siteId : "-";
      },
    },
    {
      field: "type",
      headerName: t("report.type"),
      width: 100,
      headerAlign: "center",
      renderCell: (params) => {
        switch (params.getValue("type")) {
          case faultType.Hv:
            return "HV";
          case faultType.Lv:
            return "LV";
          case faultType.Tamper:
            return t("report.tamper");
          case faultType.Power:
            return t("report.power");
          case faultType.Input1:
            return t("report.input1");
          case faultType.Input2:
            return t("report.input2");
        }
      },
    },
    {
      field: "occuredOn",
      headerName: t("report.occuredOn"),
      width: 150,
      headerAlign: "center",
      renderCell: (params) =>
        params.getValue("occuredOn") > 0
          ? dateToString(params.getValue("occuredOn"))
          : "-",
    },
    {
      field: "seenBy",
      headerName: t("report.seenBy"),
      width: 200,
      headerAlign: "center",
      renderCell: (params) => params.getValue("seenBy").toString(),
    },
    {
      field: "obviatedOn",
      headerName: t("report.obviatedOn"),
      width: 150,
      headerAlign: "center",
      renderCell: (params) =>
        params.getValue("obviatedOn") > 0
          ? dateToString(params.getValue("obviatedOn"))
          : "-",
    },
    {
      field: "resetedOn",
      headerName: t("report.resetedOn"),
      width: 150,
      headerAlign: "center",
      renderCell: (params) =>
        params.getValue("resetedOn") > 0
          ? dateToString(params.getValue("resetedOn"))
          : "-",
    },
    {
      field: "resetedBy",
      headerName: t("report.resetedBy"),
      width: 200,
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    setRows(props.log.reverse());
  }, [props.log]);

  return (
    <div style={{ height: "99%", width: "98%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

ReportGrid.propType = {
  log: PropType.array.isRequired,
};
