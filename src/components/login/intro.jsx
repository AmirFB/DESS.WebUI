import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "./login.css";

const useStyles = makeStyles((theme) => {
  return {
    intro: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      flex: 1,
      flexDirection: "column",
      padding: "5px",
      float: "left",
      paddingTop: "2%",
    },
  };
});

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.intro}>
      <div className="intro-top">
        <b>DESS</b>
        <br />
        Distributed Enterprise Security System
      </div>

      <div className="intro-middle"></div>

      <div>
        <img
          style={{ margin: "0px 0px 15px 15px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Irancell_Logo.gif"
          alt="Irancell"
          width={55}
          height={60}
        />
      </div>
    </div>
  );
}
