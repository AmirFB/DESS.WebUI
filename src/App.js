import React from "react";
import PropTypes from "prop-types";
import Login from "./components/login/login";
import Main from "./components/main/main";
import TopBar from "./components/main/topBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";

import "./index.css";

function App({ userReducer, authenticateUser, ...props }) {
  const bodyClass =
    window.localStorage.getItem("lang") == "fa" ? "body-fa" : "body-en";

  return (
    <Router>
      <div id="app" className={bodyClass}>
        <TopBar />
        {userReducer.loggedIn ? <Main /> : <Login />}
      </div>
    </Router>
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

export default connect(mapStateToProps)(App);
