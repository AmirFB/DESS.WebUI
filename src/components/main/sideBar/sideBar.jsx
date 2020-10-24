import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import SiteCatalogBody from "./SiteCatalogBody";
import SvgIcon from "@material-ui/core/SvgIcon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SignalCellularOffRoundedIcon from "@material-ui/icons/SignalCellularOffRounded";
import SignalCellular0BarRoundedIcon from "@material-ui/icons/SignalCellular0BarRounded";
import SignalCellular1BarRoundedIcon from "@material-ui/icons/SignalCellular1BarRounded";
import SignalCellular2BarRoundedIcon from "@material-ui/icons/SignalCellular2BarRounded";
import SignalCellular3BarRoundedIcon from "@material-ui/icons/SignalCellular3BarRounded";
import SignalCellular4BarRoundedIcon from "@material-ui/icons/SignalCellular4BarRounded";
import Battery20RoundedIcon from "@material-ui/icons/Battery20Rounded";
import Battery30RoundedIcon from "@material-ui/icons/Battery30Rounded";
import Battery50RoundedIcon from "@material-ui/icons/Battery50Rounded";
import Battery60RoundedIcon from "@material-ui/icons/Battery60Rounded";
import Battery80RoundedIcon from "@material-ui/icons/Battery80Rounded";
import Battery90RoundedIcon from "@material-ui/icons/Battery90Rounded";
import BatteryCharging20RoundedIcon from "@material-ui/icons/BatteryCharging20Rounded";
import BatteryCharging30RoundedIcon from "@material-ui/icons/BatteryCharging30Rounded";
import BatteryCharging50RoundedIcon from "@material-ui/icons/BatteryCharging50Rounded";
import BatteryCharging60RoundedIcon from "@material-ui/icons/BatteryCharging60Rounded";
import BatteryCharging80RoundedIcon from "@material-ui/icons/BatteryCharging80Rounded";
import BatteryCharging90RoundedIcon from "@material-ui/icons/BatteryCharging90Rounded";
import BatteryChargingFullRoundedIcon from "@material-ui/icons/BatteryChargingFullRounded";
import BatteryFullRoundedIcon from "@material-ui/icons/BatteryFullRounded";
import BatteryAlertRoundedIcon from "@material-ui/icons/BatteryAlertRounded";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import amber from "@material-ui/core/colors/amber";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import cyan from "@material-ui/core/colors/cyan";

import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import {
  getState,
  statusType,
  batteryStatusType,
} from "../../../types/siteTypes";

import "./sideBar.css";

const classes = (theme) => ({
  side: {
    width: "250px",
    padding: "5px",
    backgroundColor: theme.palette.primary[100],
    overflow: "auto",
  },
});

class SideBar extends React.Component {
  state = {
    activeIndexes: [],
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
    const activeIndexes = [],
      inactiveIndexes = [];

    this.props.siteReducer.sites.map((site, index) => {
      this.setState((prevState) => {
        console.log(prevState.expanded);
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

      if (site.status && Date.now() < site.status.date + site.timeout)
        activeIndexes.push(index);
      else inactiveIndexes.push(index);

      this.setState({ activeIndexes, inactiveIndexes });
      this.setState({ inactiveIndexes });
    });
  };

  renderState(state) {
    switch (state) {
      case statusType.Clear:
        return (
          <SvgIcon
            fontSize="small"
            style={{ color: amber[500], fontSize: "14px" }}
          >
            <CheckBoxIcon />
          </SvgIcon>
        );

      case statusType.Warning:
        return (
          <SvgIcon
            fontSize="small"
            style={{ color: amber[500], fontSize: "14px" }}
          >
            <WarningIcon />
          </SvgIcon>
        );

      case statusType.Fault:
        return (
          <SvgIcon
            fontSize="small"
            style={{ color: red[500], fontSize: "14px" }}
          >
            <ErrorIcon />
          </SvgIcon>
        );

      case statusType.Null:
        return (
          <SvgIcon
            fontSize="small"
            style={{ color: grey[500], fontSize: "14px" }}
          >
            <HourglassEmptyIcon />
          </SvgIcon>
        );
    }
  }

  getBatteryIcon = (site) => {
    const level = site.status.batteryLevel;
    const status = site.status.batteryStatus;
    const color =
      status === batteryStatusType.Fault
        ? red[500]
        : level === 100
        ? green[500]
        : level > 30
        ? blue[500]
        : red[500];

    return (
      <SvgIcon style={{ color: color, fontSize: "14px" }}>
        {status === batteryStatusType.Fault ? (
          <BatteryAlertRoundedIcon />
        ) : level === 100 ? (
          status === batteryStatusType.Charging ? (
            <BatteryChargingFullRoundedIcon />
          ) : (
            <BatteryFullRoundedIcon />
          )
        ) : level >= 90 ? (
          status === batteryStatusType.Charging ? (
            <BatteryCharging90RoundedIcon />
          ) : (
            <Battery90RoundedIcon />
          )
        ) : level >= 80 ? (
          status === batteryStatusType.Charging ? (
            <BatteryCharging80RoundedIcon />
          ) : (
            <Battery80RoundedIcon />
          )
        ) : level >= 60 ? (
          status === batteryStatusType.Charging ? (
            <BatteryCharging60RoundedIcon />
          ) : (
            <Battery60RoundedIcon />
          )
        ) : level >= 50 ? (
          status === batteryStatusType.Charging ? (
            <BatteryCharging50RoundedIcon />
          ) : (
            <Battery50RoundedIcon />
          )
        ) : level >= 30 ? (
          status === batteryStatusType.Charging ? (
            <BatteryCharging30RoundedIcon />
          ) : (
            <Battery30RoundedIcon />
          )
        ) : status === batteryStatusType.Charging ? (
          <BatteryCharging20RoundedIcon />
        ) : (
          <Battery20RoundedIcon />
        )}
      </SvgIcon>
    );
  };

  getSignalIcon = (site) => {
    switch (site.status.signalStrength) {
      case 0:
        return (
          <SvgIcon style={{ fontSize: "14px", color: blue[500] }}>
            <SignalCellularOffRoundedIcon />
          </SvgIcon>
        );
      case 1:
        return (
          <SvgIcon style={{ fontSize: "14px", color: blue[500] }}>
            <SignalCellular0BarRoundedIcon />
          </SvgIcon>
        );
      case 2:
        return (
          <SvgIcon style={{ fontSize: "14px", color: blue[500] }}>
            <SignalCellular1BarRoundedIcon />
          </SvgIcon>
        );
      case 3:
        return (
          <SvgIcon style={{ fontSize: "14px", color: blue[500] }}>
            <SignalCellular2BarRoundedIcon />
          </SvgIcon>
        );
      case 4:
        return (
          <SvgIcon style={{ fontSize: "14px", color: blue[500] }}>
            <SignalCellular3BarRoundedIcon />
          </SvgIcon>
        );
      case 5:
        return (
          <SvgIcon style={{ fontSize: "14px", color: blue[500] }}>
            <SignalCellular4BarRoundedIcon />
          </SvgIcon>
        );
    }
  };

  renderHeader = (site) => (
    <Grid container direction="row" alignItems="center">
      <Grid item lg={4}>
        <span style={{ color: blue[500] }}>{site.siteId}</span>
      </Grid>
      <Grid item lg>
        {this.renderState(getState(site))}
      </Grid>
      <Grid item xs>
        <span
          style={{
            color:
              site.status.temperature > site.temperatureMax
                ? red[500]
                : site.status.temperature < site.temperatureMin
                ? cyan[500]
                : green[500],
            fondSize: "14px",
          }}
        >
          {site.status.temperature}°C
        </span>
      </Grid>
      <Grid item xs>
        {this.getBatteryIcon(site)}
      </Grid>
      <Grid item xs>
        {this.getSignalIcon(site)}
      </Grid>
    </Grid>
  );

  rednerAccordion = (indexes, title) => {
    const sites = this.props.siteReducer.sites;
    return (
      <Accordion>
        <AccordionSummary id={title} expandIcon={<ExpandMoreIcon />}>
          {title}&nbsp;(
          {indexes.length})
        </AccordionSummary>
        <AccordionDetails style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <Grid container direction="column" justify="space-evenly">
            {indexes.map((index) => {
              const site = sites[index];
              return (
                <Grid item id={"grid" + site.id}>
                  <Accordion
                    id={"accordion" + site.id}
                    expanded={this.state.expanded[site.id]}
                    onChange={this.handleExpanded(site.id)}
                    style={{
                      fontSize: "12px",
                      backgroundColor: blue[100],
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
        {this.rednerAccordion(
          this.state.activeIndexes,
          t("sideBar.activeSites")
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
