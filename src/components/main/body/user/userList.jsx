import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import "@progress/kendo-theme-material/dist/all.css";
import Users from "./users.json";

export default function UsersList() {
  return (
    <div>
      <div>Icons place</div>

      <Grid style={{ height: "100%" }} data={[...Users]}>
        <Column field="ID" title="ID" width="40px" />
        <Column field="Username" title="Username" />
        <Column field="Firstname" title="Firstname" />
        <Column field="Lastname" title="Lastname" />
        <Column field="Group" title="Group" />
      </Grid>
    </div>
  );
}
