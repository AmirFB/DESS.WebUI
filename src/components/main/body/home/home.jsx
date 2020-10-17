import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Map from "./map";

import { connect } from "react-redux";

import * as siteActions from "../../../../redux/actions/siteActions";

import "../body.css";

function Home({ siteReducer, getSites, ...props }) {
  useEffect(() => {
    if (siteReducer.sites.length === 0) getSites();
  }, [siteReducer.sites]);

  return <Map sites={siteReducer.sites} />;
}

Home.propTypes = {
  siteReducer: PropTypes.object.isRequired,
  getSites: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

const mapDispatchToProps = {
  getSites: siteActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
