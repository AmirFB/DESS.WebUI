import React, { useState } from "react";
import L from "leaflet";
import MarkerIcon from "../../../../assets/images/marker.png";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { statusType } from "../../../../types/siteTypes";

import "../body.css";
import "./map.css";

const normalIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
  className: "normal-icon",
});

const warningIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
  className: "warning-icon",
});

const faultIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
  className: "fault-icon",
});

const nullIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
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
            site.status === undefined ||
            site.status.state === undefined ||
            site.status.state == statusType.Null
              ? nullIcon
              : site.status.state === statusType.Clear
              ? normalIcon
              : site.status.state === statusType.Warning
              ? warningIcon
              : faultIcon
          }
        >
          <Popup>An Icon.</Popup>
        </Marker>
      ))}
    </Map>
  );
}
