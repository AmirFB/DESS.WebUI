import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";

import * as userActions from "../../redux/actions/userActions";
import { makeStyles } from "@material-ui/core/styles";

import "../../index.css";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    select: {
      marginTop: theme.spacing(2),
      color: "inherit",
    },
  };
});

function TopBar({ userReducer, logout, ...props }) {
  const [t, i18n] = useTranslation();
  const classes = useStyles();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    window.localStorage.setItem("lang", event.target.value);
  };

  function handelLogout() {
    logout();
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      className={classes.container}
    >
      {userReducer.loggedIn && (
        <span
          onClick={handelLogout}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          <IconButton aria-label="addSite" size="small" color="inherit">
            <ExitToAppIcon fontSize="inherit" />
          </IconButton>
          <em>{t("common.logout")}</em>
        </span>
      )}
      <span style={{ margin: "10px" }}>
        <IconButton aria-label="addSite" size="small" color="inherit">
          <GTranslateIcon fontSize="inherit" />
        </IconButton>
        <Select
          className={classes.container}
          value={window.localStorage.getItem("lang")}
          onChange={changeLanguage}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"fa"}>فارسی</MenuItem>
        </Select>
      </span>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  logout: userActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
