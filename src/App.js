import React from "react";
import PropTypes from "prop-types";
import Login from "./components/login/login";
import Main from "./components/main/main";

import { connect } from "react-redux";

function App({ userReducer, authenticateUser, ...props }) {
  return <>{userReducer.loggedIn ? <Main /> : <Login />}</>;
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
