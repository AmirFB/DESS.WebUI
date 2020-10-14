import React, { useState } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../body.css";

import MarkerIcon from "../../../../assets/images/marker.png";

const myIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 4],
  popupAnchor: [0, -41],
  className: "blinking",
});

export default function MapForm() {
  const [zoom, setZoom] = useState({
    lat: 33.0388794,
    lng: 53.6507113,
    zoom: 6,
  });

  const position = [zoom.lat, zoom.lng];
  const position2 = [34.32455, 50];

  return (
    <Map className="map" center={position} zoom={zoom.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <Marker position={position2} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <Marker position={[32, 54]} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}
