import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { DataGrid } from "@material-ui/data-grid";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import red from "@material-ui/core/colors/red";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function UserGroupGrid({ groups, permissions, removeGroup, ...props }) {
  const [t, i18n] = useTranslation();
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleEdit = (id) => {
    history.push({
      pathname: "/userGroups/userGroupEdit",
      state: { id },
    });
  };

  const handelRemove = () => {
    setOpen(true);
  };

  const handleAccept = (groupId) => {
    // removeGroup(groupId);
    // getGroups();
    setOpen(false);
  };

  const handleDecline = () => {
    setOpen(false);
  };

  const columns = [
    {
      field: "title",
      headerName: t("users.groupName"),
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "permission",
      headerName: t("users.permissions"),
      width: 950,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          {permissions.map((permission) => (
            <>
              <Checkbox
                checked={params
                  .getValue("permissionIds")
                  .includes(permission.id)}
                color="primary"
              ></Checkbox>
              {t("users." + permission.title)}
            </>
          ))}
        </>
      ),
    },
    {
      field: "actions",
      headerName: t("common.actions"),
      width: 115,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="editGroup"
            size="medium"
            color="primary"
            onClick={() => {
              handleEdit(params.getValue("id"));
            }}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <>
            <IconButton
              aria-label="removeGroup"
              size="medium"
              style={{ color: red[500] }}
              onClick={() => {
                handelRemove(params.getValue("id"));
              }}
            >
              <DeleteForeverIcon fontSize="inherit" />
            </IconButton>

            <Dialog
              open={open}
              onClose={handleDecline}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {t("dialog.title")}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {t("dialog.message")}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={handleDecline}>
                  {t("dialog.disagree")}
                </Button>
                <Button
                  onClick={() => {
                    handleAccept(params.getValue("id"));
                  }}
                  color="primary"
                  autoFocus
                >
                  {t("dialog.agree")}
                </Button>
              </DialogActions>
            </Dialog>
          </>
        </>
      ),
    },
  ];

  useEffect(() => {
    setRows(groups);
  }, [groups]);

  return (
    <div style={{ height: "91%", width: "99%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        hideFooterSelectedRowCount
      />
    </div>
  );
}

export default UserGroupGrid;
