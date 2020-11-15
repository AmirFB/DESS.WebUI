import React from "react";
import SiteCatalogBody from "./SiteCatalogBody";

import { PanelBarItem } from "@progress/kendo-react-layout";

import signal0 from "../../../assets/images/signal/signal0.svg";
import signal1 from "../../../assets/images/signal/signal1.svg";
import signal2 from "../../../assets/images/signal/signal2.svg";
import signal3 from "../../../assets/images/signal/signal3.svg";
import signal4 from "../../../assets/images/signal/signal4.svg";
import signal5 from "../../../assets/images/signal/signal5.svg";

export default function SiteCatalog({ site, ...props }) {
  function getIcon() {
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
    <PanelBarItem
      key={site.id}
      title={
        <>
          {site.name}&nbsp;|&nbsp;T:{site.status.temperature}°C&nbsp;
          {site.status.batteryLevel}%&nbsp;
          <img className="signal-img" src={getIcon()} />
        </>
      }
    >
      <SiteCatalogBody site={site} />
    </PanelBarItem>
  );
}
