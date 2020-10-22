import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import { DataGrid } from "@material-ui/data-grid";

import { useTranslation } from "react-i18next";

export default function ReportGrid(props) {
  const [t, i18n] = useTranslation();
  const [rows, setRows] = useState([]);
  const columns = [
    { field: "applied", headerName: t("report.applied"), width: 100 },
    { field: "ipAddress", headerName: t("common.ipAdd"), width: 130 },
    { field: "serialNo", headerName: t("site.serialNo"), width: 90 },
    { field: "hvAlarm", headerName: t("report.hvAlarm"), width: 93 },
    { field: "lvAlarm", headerName: t("report.lvAlarm"), width: 90 },
    { field: "tamperAlarm", headerName: t("report.tamperAlarm"), width: 121 },
    {
      field: "mainPowerFault",
      headerName: t("report.mainPowerFault"),
      width: 146,
    },
    { field: "hvPowerFault", headerName: t("report.hvPowerFault"), width: 133 },
    {
      field: "hvChargeFault",
      headerName: t("report.hvChargeFault"),
      width: 139,
    },
    {
      field: "hvDischargeFault",
      headerName: t("report.hvDichargeFault"),
      width: 157,
    },
    { field: "temperature", headerName: t("common.temperature"), width: 113 },
    {
      field: "batteryStatus",
      headerName: t("report.batteryStatus"),
      width: 123,
    },
    { field: "batteryLevel", headerName: t("report.batteryLevel"), width: 116 },
    { field: "input1", headerName: t("common.input1"), width: 90 },
    { field: "input2", headerName: t("common.input2"), width: 90 },
    { field: "output1", headerName: t("common.output1"), width: 90 },
    { field: "output2", headerName: t("common.output2"), width: 90 },
    { field: "latitude", headerName: t("common.latitude"), width: 110 },
    { field: "longitude", headerName: t("common.longitude"), width: 120 },
    {
      field: "signalStrength",
      headerName: t("report.signalStrength"),
      width: 130,
    },
  ];

  useEffect(() => {
    setRows(props.log);
  }, [props.log]);

  return (
    <div style={{ height: "99%", width: "99%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        hideFooterSelectedRowCount
      />
    </div>
  );
}

ReportGrid.propType = {
  log: PropType.array.isRequired,
};
