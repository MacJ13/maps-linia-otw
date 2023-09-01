import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import MyMarker from "./marker";
import { useState } from "react";

const Map = () => {
  const position = [52.136832148956984, 21.235393756172204];

  const [currentMarker, setCurrentMarker] = useState(null);

  return (
    <div id="map" className="frame">
      <div id="map-box">
        <div id="map-options">Options element</div>
        <div id="map-detail">
          {!currentMarker ? (
            "Map detail"
          ) : (
            <>
              {currentMarker.id}
              <br />
              <br />
              position:
              <br />
              {currentMarker.position.join(" ")}
            </>
          )}
        </div>
        <div id="map-content">
          <MapContainer
            className="map-wrapper"
            center={position}
            zoom={13}
            // scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MyMarker onClick={(marker) => setCurrentMarker(marker)} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
