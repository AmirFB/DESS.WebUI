import React, { useState, useEffect, useRef } from "react";
import SiteCatalog from "./siteCatalog";
import SiteCatalogBody from "./SiteCatalogBody";

import { connect } from "react-redux";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { withTranslation } from "react-i18next";

import "./sideBar.css";

import signal0 from "../../../assets/images/signal/signal0.svg";
import signal1 from "../../../assets/images/signal/signal1.svg";
import signal2 from "../../../assets/images/signal/signal2.svg";
import signal3 from "../../../assets/images/signal/signal3.svg";
import signal4 from "../../../assets/images/signal/signal4.svg";
import signal5 from "../../../assets/images/signal/signal5.svg";

class SideBar extends React.Component {
  state = { activeIndexes: [], inactiveIndexes: [], timerKey: null };

  componentDidMount() {
    this.populateSites();
    if (this.timerKey != null) clearInterval(this.timerKey);
    this.setState({ timerKey: setInterval(this.populateSites, 1000) });
  }

  populateSites = () => {
    const activeIndexes = [],
      inactiveIndexes = [];

    this.props.siteReducer.sites.map((site, index) => {
      if (Date.now() < site.status.date + site.interval * 2000)
        activeIndexes.push(index);
      else inactiveIndexes.push(index);

      this.setState({ activeIndexes });
      this.setState({ inactiveIndexes });
    });
  };

  render() {
    const { t } = this.props;
    const sites = this.props.siteReducer.sites;

    function getIcon(site) {
      switch (site.status.signalStrength) {
        case 0:
          return signal0;
        case 1:
          return signal1;
        case 2:
          return signal2;
        case 3:
          return signal3;
        case 4:
          return signal4;
        case 5:
          return signal5;
      }
    }

    return (
      <PanelBar className="side-bar">
        <PanelBarItem title={t("sideBar.activeSites")} expanded>
          {this.state.activeIndexes.map((index) => {
            const site = sites[index];
            return (
              <PanelBarItem
                className="site-catalog"
                key={site.id}
                title={
                  <>
                    {site.siteId}&nbsp;|&nbsp;T:
                    {site.status.temperature}
                    °C&nbsp;
                    {site.status.batteryLevel}%&nbsp;
                    <img className="signal-img" src={getIcon(site)} />
                  </>
                }
              >
                <SiteCatalogBody site={site} />
              </PanelBarItem>
            );
          })}
        </PanelBarItem>

        <PanelBarItem title={t("sideBar.offlineSites")} expanded>
          {this.state.inactiveIndexes.map((index) => {
            const site = sites[index];
            return (
              <PanelBarItem
                className="site-catalog"
                key={site.id}
                title={
                  <>
                    {site.siteId}&nbsp;|&nbsp;T:
                    {site.status.temperature}
                    °C&nbsp;
                    {site.status.batteryLevel}%&nbsp;
                    <img className="signal-img" src={getIcon(site)} />
                  </>
                }
              >
                <SiteCatalogBody site={site} />
              </PanelBarItem>
            );
          })}
        </PanelBarItem>
      </PanelBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

export default connect(mapStateToProps)(withTranslation()(SideBar));
