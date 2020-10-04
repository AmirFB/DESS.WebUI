import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SiteGrid from "./siteGrid";
import * as siteActions from "../../../../redux/actions/siteActions";

class SiteList extends React.Component {
  componentDidMount() {
    const { siteReducer, actions } = this.props;
    const sites = siteReducer.sites;

    if (sites.length === 0) {
      actions.getSites();
    }
  }

  render() {
    return <SiteGrid sites={this.props.siteReducer.sites} />;
  }
}

SiteList.propTypes = {
  sites: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSites: bindActionCreators(siteActions.getSites, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteList);
