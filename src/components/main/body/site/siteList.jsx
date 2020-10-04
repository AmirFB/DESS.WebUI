import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SiteGrid from "./siteGrid";
import * as siteActions from "../../../../redux/actions/siteActions";

class SiteList extends React.Component {
  componentDidMount() {
    const { siteRecuder, actions } = this.props;
    const sites = siteRecuder.sites;

    if (sites.length === 0) {
      actions.getSites().catch((error) => {
        alert("Loading sites failed" + error);
      });
    }

    setTimeout(() => {
      console.log("sites");
      console.log(this.props.siteRecuder.sites);
    }, 3000);
  }

  render() {
    return <SiteGrid sites={this.props.siteRecuder.sites} />;
  }
}

SiteList.propTypes = {
  sites: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    siteRecuder: state.siteRecuder,
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
