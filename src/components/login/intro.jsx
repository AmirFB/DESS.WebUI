import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "./login.css";
import logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => {
  return {
    intro: {
      backgroundColor: theme.palette.primary[50],
      display: "flex",
      flex: 1,
      flexDirection: "column",
      padding: "5px",
      float: "left",
      paddingTop: "2%",
    },

    title: {
      color: theme.palette.primary[600],
    },
  };
});

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.intro}>
      <div className="intro-top">
        <span className={classes.title}>
          <b>DESS</b>
          <br />
          Distributed Enterprise Security System
        </span>
      </div>

      <div className="intro-middle"></div>

      <div>
        <img
          style={{ margin: "0px 0px 15px 15px" }}
          src={logo}
          alt="Irancell"
          width={80}
        />
      </div>
    </div>
  );
}
