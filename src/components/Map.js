import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { locationIcon, resultIcon } from "../utils/icons";
import "leaflet/dist/leaflet.css";
import { fetchRoute } from "../utils/services";
import Routing from "./Routing";
import ChangeView from "./ChangeView";

const Map = ({ userCoordinates, results }) => {
  const [route, setRoute] = useState([]);
  const [showRoute, setShowRoute] = useState(false);
  const [destination, setDestination] = useState(null);

  const handleDirectionsClick = async (userCoords, resultCoords) => {
    const fetchedRoute = await fetchRoute(userCoords, resultCoords);
    setRoute(fetchedRoute);
    setShowRoute(true);
  };

  const handleBackToResultsClick = () => {
    setShowRoute(false);
    setDestination(null);
  };

  return (
    <div className="map-view">
      <h2>Map</h2>
      <button onClick={handleBackToResultsClick}>Back to results</button>
      <MapContainer
        center={userCoordinates}
        zoom={13}
        scrollWheelZoom={false}
        height="100vh"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={userCoordinates}
          icon={locationIcon}
        ></Marker>
        {results &&
          !showRoute &&
          results.map((result, index) => {
            const resultCoordinates = [result.place.geometry.coordinates[1], result.place.geometry.coordinates[0]];
            return (
              <Marker
                key={index}
                position={resultCoordinates}
                icon={resultIcon}
              >
                <Popup>
                  <div>{result.displayString}</div>
                  <button
                    onClick={() => {
                      handleDirectionsClick(userCoordinates, resultCoordinates);
                      setDestination(result);
                    }}
                  >
                    Directions
                  </button>
                </Popup>
              </Marker>
            );
          })}
        {showRoute && (
          <>
            <Routing route={route} />
            <Marker
              position={[destination.place.geometry.coordinates[1], destination.place.geometry.coordinates[0]]}
              icon={resultIcon}
            >
              <Popup>
                <div>{destination.displayString}</div>
              </Popup>
            </Marker>
          </>
        )}
        <ChangeView
          center={userCoordinates}
          zoom={12}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
