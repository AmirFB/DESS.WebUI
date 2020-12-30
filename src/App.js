import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Login from "./components/login/login";
import Main from "./components/main/main";
import TopBar from "./components/main/topBar";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import cyan from "@material-ui/core/colors/cyan";

import { connect } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";

import * as userActions from "./redux/actions/userActions";

import "./index.css";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: blue,
      secondary: purple,
      error: red,
      warning: amber,
      info: cyan,
      success: green,
      null: grey,
      action: green,
    },
    main: {
      primary: blue[500],
      secondary: purple[500],
    },
    stauts: {
      clear: green[500],
      warning: yellow[500],
      fault: red[500],
      null: grey[500],
    },
  })
);

function App({ userReducer, initialAuthentication, ...props }) {
  const bodyClass =
    window.localStorage.getItem("lang") === "fa" ? "body-fa" : "body-en";

  useEffect(() => {
    if (!userReducer.loggedIn && window.localStorage.getItem("user")) {
      initialAuthentication();
    }
  }, [userReducer.currentUser]);

  return (
    <ThemeProvider theme={theme}>
      <div id="app" className={bodyClass}>
        <TopBar />
        {userReducer.loggedIn ? <Main /> : <Login />}
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  userReducer: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  initialAuthentication: userActions.initialAuthentication,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
