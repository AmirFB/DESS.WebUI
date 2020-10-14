import React, { useState, useEffect } from "react";
import L from "leaflet";
import MarkerIcon from "../../../../assets/images/marker.png";
import PropTypes from "prop-types";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

import "../body.css";

const myIcon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 4],
  popupAnchor: [0, -41],
  className: "blinking",
});

function MapForm({ siteReducer, ...props }) {
  const [zoom, setZoom] = useState({
    lat: 33.0388794,
    lng: 53.6507113,
    zoom: 6,
  });

  const position = [zoom.lat, zoom.lng];
  const position2 = [34.32455, 50];
  console.log("Sites:");
  console.log(siteReducer.sites);

  return (
    <Map className="map" center={position} zoom={zoom.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {siteReducer.sites.map((site, index) => (
        <Marker
          position={{ lat: site.latitute, lng: site.longitude }}
          icon={myIcon}
        >
          {" "}
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
      {/* <Marker position={position} icon={myIcon}>
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
      </Marker> */}
    </Map>
  );
}

MapForm.propTypes = {
  siteReducer: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    siteReducer: state.siteReducer,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MapForm);
