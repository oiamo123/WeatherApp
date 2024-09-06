import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import useCoords from "../../hooks/useCoords";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

function Map(props) {
  const { coords, error } = useCoords();

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!coords) {
    return <p>Loading...</p>;
  }

  return (
    <MapContainer
      className={styles.map}
      center={[coords.latitude, coords.longitude]}
      zoom={13}
      minZoom={5}
      maxZoom={18}
    >
      <TileLayer
        attribution="&copy https://www.openstreetmap.org/"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        attribution="&copy https://openweathermap.org/"
        url="http://localhost:8000/api/weather-tiles/{z}/{x}/{y}"
        zIndex={10}
        opacity={1.1}
      />
    </MapContainer>
  );
}

export default Map;
