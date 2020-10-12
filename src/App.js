import React from "react";
import PropTypes from "prop-types";
import Login from "./components/login/login";
import Main from "./components/main/main";
import TopBar from "./components/main/topBar";

import { connect } from "react-redux";

import "./index.css";

function App({ userReducer, authenticateUser, ...props }) {
  return (
    <div id="app">
      <TopBar />
      {userReducer.loggedIn ? <Main /> : <Login />}
    </div>
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
