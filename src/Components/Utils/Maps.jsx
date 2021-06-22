import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Maps = () => {
  const [position, setposition] = useState({
    lat: 35.6997,
    lng: 51.3381,
    zoom: 7,
  });
  const { lat, lng, zoom } = position;
  const onMove = (event) => {
    const getLatLong = event.target.getLatLng();
    const getValue = Object.values(getLatLong);

    setposition({
      lat: getValue[0].toPrecision(9),
      lng: getValue[1].toPrecision(9),
      zoom: event.target._map._zoom,
    });
  };

  return (
    <div className="map-container">
      <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} draggable={true} onDragEnd={onMove}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
