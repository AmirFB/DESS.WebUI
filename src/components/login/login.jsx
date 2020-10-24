import React from "react";

import LoginForm from "./loginForm";
import Intro from "./intro";

import { makeStyles } from "@material-ui/core/styles";
import "./login.css";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      backgroundColor: theme.palette.primary.light,
      flex: 1,
    },
  };
});

export default function Login() {
  const classes = useStyles();

  return (
    <div id="login-body">
      <div className="login">
        <Intro />
        <LoginForm />
      </div>
    </div>
  );
}
