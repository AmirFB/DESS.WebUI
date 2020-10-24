import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import * as userActions from "../../../../redux/actions/userActions";

import { DataGrid } from "@material-ui/data-grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import red from "@material-ui/core/colors/red";

function UserGrid({ users, groups, removeUser, getUsers, ...props }) {
  const [t, i18n] = useTranslation();
  const [rows, setRows] = useState([]);
  const history = useHistory();

  const handleEdit = (userId, groups) => {
    history.push({
      pathname: "/users/userEdit/",
      state: { id: userId, groups: groups },
    });
  };

  const handelRemove = (userId) => {
    removeUser(userId);
    getUsers();
  };

  const columns = [
    {
      field: "username",
      headerName: t("users.username"),
      width: 130,
    },
    { field: "firstName", headerName: t("users.firstName"), width: 110 },
    { field: "lastName", headerName: t("users.lastName"), width: 140 },
    {
      field: "groupName",
      headerName: "Group name",
      width: 112,
      renderCell: (params) => (
        <>
          {groups
            ? groups.find((g) => g.id === params.getValue("groupId")).title
            : "NULL"}
        </>
      ),
    },
    {
      field: "actions",
      headerName: t("common.actions"),
      width: 140,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="addSite"
            size="medium"
            color="primary"
            onClick={() => {
              handleEdit(params.getValue("id"), groups);
            }}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="addSite"
            size="medium"
            style={{ color: red[500] }}
            onClick={() => {
              handelRemove(params.getValue("id"));
            }}
          >
            <DeleteForeverIcon fontSize="inherit" />
          </IconButton>
        </>
      ),
    },
  ];

  useEffect(() => {
    setRows(users);
  }, [users]);

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

UserGrid.PropType = {
  users: PropType.array.isRequired,
  removeUser: PropType.func.isRequired,
  getUsers: PropType.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  removeUser: userActions.remove,
  getUsers: userActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGrid);
