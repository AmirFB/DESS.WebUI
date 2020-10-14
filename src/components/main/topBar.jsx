import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Button } from "@progress/kendo-react-buttons";
import * as userActions from "../../redux/actions/userActions";
import EN from "../../assets/images/en.svg";
import IR from "../../assets/images/ir.svg";

import "../../index.css";

function TopBar({ userReducer, logout, ...props }) {
  const [t, i18n] = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    window.localStorage.setItem("lang", language);
  };

  function handelLogout() {
    logout();
  }

  return (
    <div id="top-bar">
      <img
        onClick={() => changeLanguage("en")}
        className="language-button"
        src={EN}
      />
      <img
        onClick={() => changeLanguage("fa")}
        className="language-button"
        src={IR}
      />

      {userReducer.loggedIn && (
        <Button look="flat" onClick={handelLogout} id="logout-button">
          Logout
        </Button>
      )}
    </div>
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
