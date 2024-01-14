import React from "react";
import { MapContainer as LeafletContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapContainerProps {}

const MapContainer: React.FC<MapContainerProps> = () => {
  return (
    <LeafletContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </LeafletContainer>
  );
};

export default MapContainer;
