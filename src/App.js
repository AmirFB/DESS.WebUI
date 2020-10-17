import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Login from "./components/login/login";
import Main from "./components/main/main";
import TopBar from "./components/main/topBar";

import { connect } from "react-redux";

import * as userActions from "./redux/actions/userActions";

import "./index.css";

function App({ userReducer, initialAuthentication, ...props }) {
  const bodyClass =
    window.localStorage.getItem("lang") == "fa" ? "body-fa" : "body-en";

  useEffect(() => {
    if (!userReducer.loggedIn) initialAuthentication();
  });

  return (
    <div id="app" className={bodyClass}>
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

const mapDispatchToProps = {
  initialAuthentication: userActions.initialAuthentication,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
