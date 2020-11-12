import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "../styles/Map.css";
import { showDataOnMap } from "../utilities/util";

export default function Map({ center, zoom, countries, casesType }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* loop through all countries and draw circles  */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}
