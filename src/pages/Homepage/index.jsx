import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Homepage() {
  const [latLong, setLatLong] = useState();

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
    <MapContainer
      center={[latLong.lat, latLong.long]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[latLong.lat, latLong.long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  ) : null;
}

export default Homepage;
