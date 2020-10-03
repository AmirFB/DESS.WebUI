import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import { connect } from "react-redux";
import * as siteActions from "../../../../redux/actions/siteActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

export class SiteList extends React.Component {
  componentDidMount() {
    const { sites, actions } = this.props;

    actions.getSites();
  }

  render() {
    return (
      <div>
        <Grid style={{ height: "100%" }} data={this.props.sites}>
          <Column field="id" title="ID" width="40px" />
          <Column field="name" title="Name" width="90px" />
          <Column field="siteId" title="Site ID" width="120px" />
          <Column field="serialNo" title="Serial Number" width="120px" />
          <Column field="phoneNumber" title="Phone Number" width="120px" />
          <Column field="ipAddress" title="IP Address" width="120px" />
          <Column
            field="useGlobalIntervarl"
            title="Use global interval"
            width="150px"
          />
          <Column field="interval" title="Interval" width="80px" />
          <Column field="autoLocation" title="Auto Location" width="90px" />
          <Column field="latitude" title="Latitude" width="110px" />
          <Column field="longitude" title="Longitude" width="110px" />
          <Column field="hvEnabled" title="HV enabled" width="100px" />
          <Column field="lvEnabled" title="LV enabled" width="100px" />
          <Column field="hvPower" title="HV power" />
          <Column field="hvThreshold" title="HV treshold" />
          <Column field="hvRepeat" title="HV repeat" />
          <Column field="temperatureMin" title="Temperature min" />
          <Column field="temperatureMax" title="Temperature max" />
          <Column field="batteryMin" title="Battery min" />
          <Column field="batteryMax" title="Battery max" />
          <Column field="input1" title="Input 1" />
          <Column field="input2" title="Input 2" />
          <Column field="output1" title="Output 1" />
          <Column field="output2" title="Output 2" />
        </Grid>
      </div>
    );
  }
}

SiteList.propTypes = {
  sites: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    sites: state.sites,
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
