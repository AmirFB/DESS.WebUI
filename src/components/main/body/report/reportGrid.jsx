import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import { DataGrid } from "@material-ui/data-grid";
import { dateToString } from "../../../../helpers/dateTime";

import { useTranslation } from "react-i18next";

export default function ReportGrid(props) {
  const [t, i18n] = useTranslation();
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "seenBy", headerName: t("report.seenBy"), width: 200 },
    {
      field: "occuredOn",
      headerName: t("report.occuredOn"),
      width: 135,
      renderCell: (params) =>
        params.getValue("occuredOn") > 0
          ? dateToString(params.getValue("occuredOn"))
          : "-",
    },
    {
      field: "resetedOn",
      headerName: t("report.resetedOn"),
      width: 135,
      renderCell: (params) =>
        params.getValue("resetedOn") > 0
          ? dateToString(params.getValue("resetedOn"))
          : "-",
    },
    { field: "resetedBy", headerName: t("report.resetedBy"), width: 200 },
    {
      field: "obviatedOn",
      headerName: t("report.obviatedOn"),
      width: 135,
      renderCell: (params) =>
        params.getValue("obviatedOn") > 0
          ? dateToString(params.getValue("obviatedOn"))
          : "-",
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
