import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@material-ui/data-grid";

export default function UserGrid(props) {
  const [t, i18n] = useTranslation();
  const [rows, setRows] = useState([]);
  const columns = [
    {
      field: "username",
      headerName: t("users.username"),
      width: 130,
    },
    { field: "firstName", headerName: t("users.firstName"), width: 110 },
    { field: "lastName", headerName: t("users.lastName"), width: 140 },
    { field: "group", headerName: t("users.group"), width: 80 },
  ];

  useEffect(() => {
    setRows(props.users);
  }, [props.users]);

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

UserGrid.propType = {
  users: PropType.array.isRequired,
};
