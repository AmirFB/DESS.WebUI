import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import SiteCatalogBody from "./SiteCatalogBody";
import SignalIcon from "./signalIcon";
import BatteryIcon from "./batteryIcon";
import StateIcon from "./stateIcon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import { statusType } from "../../../../src/types/siteTypes";

import * as colors from "@material-ui/core/colors";

import "./sideBar.css";

const classes = (theme) => ({
  side: {
    width: "260px",
    padding: "5px",
    backgroundColor: theme.palette.primary[100],
    overflow: "auto",
  },
});

class SideBar extends React.Component {
  state = {
    faultyIndexes: [],
    warningIndexes: [],
    activeIndexes: [],
    faultyInactiveIndexes: [],
    warningInactiveIndexes: [],
    inactiveIndexes: [],
    expanded: {},
    timerKey: null,
  };
  t = this.props.t;
  componentDidMount() {
    this.populateSites();
    if (this.timerKey != null) clearInterval(this.timerKey);
    this.setState({ timerKey: setInterval(this.populateSites, 1000) });
  }

  populateSites = () => {
    const faultyIndexes = [],
      warningIndexes = [],
      activeIndexes = [],
      faultyInactiveIndexes = [],
      warningInactiveIndexes = [],
      inactiveIndexes = [];

    this.props.siteReducer.sites.map((site, index) => {
      this.setState((prevState) => {
        return {
          expanded: {
            ...prevState.expanded,
            [site.id]: prevState.expanded[site.id]
              ? prevState.expanded[site.id]
              : false,
          },
        };
      });
      clearInterval(this.timerKey);

      if (site.status && Date.now() < site.status.date + site.timeout * 1000) {
        if (site.status.state == statusType.Fault) faultyIndexes.push(index);
        else if (site.status.state == statusType.Warning)
          warningIndexes.push(index);
        else activeIndexes.push(index);
      } else {
        if (site.status.state == statusType.Fault)
          faultyInactiveIndexes.push(index);
        else if (site.status.state == statusType.Warning)
          warningInactiveIndexes.push(index);
        else inactiveIndexes.push(index);
      }

      this.setState({
        faultyIndexes,
        warningIndexes,
        activeIndexes,
        faultyInactiveIndexes,
        warningInactiveIndexes,
        inactiveIndexes,
      });
    });
  };

  renderHeader = (site) => (
    <Grid container direction="row" alignItems="center">
      <Grid item lg={4}>
        <span style={{ color: colors.blue[500] }}>{site.name}</span>
      </Grid>
      <Grid item lg>
        <StateIcon site={site} />
      </Grid>
      <Grid item xs>
        <span
          style={{
            color: !site.temperatureWarning
              ? colors.blue[500]
              : site.status.temperature > site.temperatureMax
              ? colors.red[500]
              : site.status.temperature < site.temperatureMin
              ? colors.cyan[500]
              : colors.green[500],
            fondSize: "14px",
          }}
        >
          {site.status.temperature}°C
        </span>
      </Grid>
      <Grid item xs>
        <BatteryIcon site={site} />
      </Grid>
      <Grid item xs>
        <SignalIcon strength={site.status.signalStrength} />
      </Grid>
    </Grid>
  );

  rednerAccordion = (indexes, title) => {
    const sites = this.props.siteReducer.sites;
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}&nbsp;({indexes.length})
        </AccordionSummary>
        <AccordionDetails style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <Grid container direction="column" justify="space-evenly">
            {indexes.map((index) => {
              const site = sites[index];

              return (
                <Grid item key={site.id}>
                  <Accordion
                    id={"accordion" + site.id}
                    expanded={this.state.expanded[site.id]}
                    onChange={this.handleExpanded(site.id)}
                    style={{
                      fontSize: "12px",
                      backgroundColor: colors.blue[100],
                      margin: 0,
                    }}
                  >
                    <AccordionSummary
                      id={"header" + site.id}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      {this.renderHeader(site)}
                    </AccordionSummary>
                    <AccordionDetails
                      id={"content" + site.id}
                      style={{
                        padding: "0px",
                      }}
                    >
                      <SiteCatalogBody id={"catalog" + site.id} site={site} />
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    );
  };

  handleExpanded = (index) => (event, isExpanded) => {
    const items = { ...this.state.expanded };
    items[index] = isExpanded;
    this.setState({ expanded: items });
  };

  render() {
    const { t } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.side}>
        {this.state.faultyIndexes.length > 0 &&
          this.rednerAccordion(
            this.state.faultyIndexes,
            t("sideBar.faultySites")
          )}
        {this.state.warningIndexes.length > 0 &&
          this.rednerAccordion(
            this.state.waringIndexes,
            t("sideBar.warningSites")
          )}
        {this.rednerAccordion(
          this.state.activeIndexes,
          t("sideBar.activeSites")
        )}
        {this.state.faultyInactiveIndexes.length > 0 &&
          this.rednerAccordion(
            this.state.faultyInactiveIndexes,
            t("sideBar.faultyOfflineSites")
          )}
        {this.state.warningInactiveIndexes.length > 0 &&
          this.rednerAccordion(
            this.state.warningInactiveIndexes,
            t("sideBar.warninOfflinegSites")
          )}
        {this.rednerAccordion(
          this.state.inactiveIndexes,
          t("sideBar.offlineSites")
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

export default connect(mapStateToProps)(
  withTranslation()(withStyles(classes)(SideBar))
);
