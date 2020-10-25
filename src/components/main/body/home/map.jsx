import React, { useState } from "react";
import L from "leaflet";
import greenMarker from "../../../../assets/images/markers/greenMarker.svg";
import blueMarker from "../../../../assets/images/markers/blueMarker.svg";
import grayMarker from "../../../../assets/images/markers/grayMarker.svg";
import whiteMarker from "../../../../assets/images/markers/whiteMarker.svg";
import yellowMarker from "../../../../assets/images/markers/yellowMarker.svg";
import redMarker from "../../../../assets/images/markers/redMarker.svg";
import blackMarker from "../../../../assets/images/markers/blackMarker.svg";
import SiteCatalogBody from "../../sideBar/SiteCatalogBody";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { statusType } from "../../../../types/siteTypes";

import "../body.css";
import "./map.css";

const normalIcon = L.icon({
  iconUrl: greenMarker,
  iconSize: [20, 30],
  iconAnchor: [10, 25],
  popupAnchor: [0, -25],
  className: "normal-icon",
});

const warningIcon = L.icon({
  iconUrl: yellowMarker,
  iconSize: [20, 30],
  iconAnchor: [10, 25],
  popupAnchor: [0, -25],
  className: "warning-icon",
});

const faultIcon = L.icon({
  iconUrl: redMarker,
  iconSize: [20, 30],
  iconAnchor: [10, 25],
  popupAnchor: [0, -25],
  className: "fault-icon",
});

const nullIcon = L.icon({
  iconUrl: blackMarker,
  iconSize: [20, 30],
  iconAnchor: [10, 25],
  popupAnchor: [0, -25],
  className: "null-icon",
});

export default function MapForm({ sites, ...props }) {
  const [zoom, setZoom] = useState({
    lat: 33.0388794,
    lng: 53.6507113,
    zoom: 6,
  });

  const position = [zoom.lat, zoom.lng];

  return (
    <Map className="map" center={position} zoom={zoom.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sites.map((site, index) => (
        <Marker
          key={site.id}
          position={{ lat: site.latitude, lng: site.longitude }}
          icon={
            !site.status ||
            !site.status.state ||
            site.status.state === statusType.Null
              ? nullIcon
              : site.status.state === statusType.Clear
              ? normalIcon
              : site.status.state === statusType.Warning
              ? warningIcon
              : faultIcon
          }
        >
          <Popup>
            <SiteCatalogBody site={site} onMap />
          </Popup>
        </Marker>
      ))}
    </Map>
  );
}
