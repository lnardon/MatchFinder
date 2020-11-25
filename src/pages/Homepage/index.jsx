import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import styles from "./styles.module.css";
import Sidebar from "../../components/Sidebar";

function Homepage() {
  const [latLong, setLatLong] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const userPositionIcon = L.icon({
    iconUrl: require("../../assets/user.svg"),
    iconSize: [32, 32],
    iconAnchor: [32, 32],
    popupAnchor: [-16, -32],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatLong({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  return latLong ? (
    <div className={styles.container}>
      <MapContainer
        center={[latLong.lat, latLong.long]}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <Marker
          icon={userPositionIcon}
          position={[latLong.lat, latLong.long]}
          eventHandlers={{
            click: (e) => {
              setIsOpen(!isOpen);
            },
          }}
        ></Marker>
        <button className={styles.addBtn}>ADD</button>
      </MapContainer>
      {isOpen && <Sidebar />}
    </div>
  ) : null;
}

export default Homepage;
