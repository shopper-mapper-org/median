import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { resultIcon, middleIcon, faveIcon, highlightIcon, middleHighlight, faveHighlight } from "../utils/icons";
import "leaflet/dist/leaflet.css";
import { fetchRoute } from "../utils/services";
import Routing from "./Routing";
import UserMarker from "./UserMarker";
import FaveButton from "./FaveButton";
import SetView from "./SetView";

const Map = ({ userCoordinates, results, isInFaves, faves, highlight, showFaves, setShowFaves }) => {
  const [route, setRoute] = useState([]);
  const [showRoute, setShowRoute] = useState(false);
  const [destination, setDestination] = useState(null);
  // const [showFaves, setShowFaves] = useState(false);

  // define useRefs to release focus on button clicks
  const backResultsRef = useRef(null);

  const handleDirectionsClick = async (userCoords, resultCoords) => {
    const fetchedRoute = await fetchRoute(userCoords, resultCoords);
    setRoute(fetchedRoute);
    setShowRoute(true);
  };

  const handleBackToResultsClick = () => {
    setShowRoute(false);
    setDestination(null);

    // remove focus from button after click
    backResultsRef.current.blur();
  };

  const faveCount = (result) => {
    return faves.filter((fave) => fave.id === result.id)[0].faves;
  };

  const isHighlighted = (result) => {
    return Array.prototype.includes.call(highlight, result);
  };

  useEffect(() => {}, [highlight]);

  return (
    <div className="map-view">
      <h2>Map</h2>
      {showRoute ? <button
        className="map-view-button"
        onClick={handleBackToResultsClick}
        ref={backResultsRef}
      >
        Back to Map
      </button> : null }
      <MapContainer
        center={userCoordinates}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserMarker userCoordinates={userCoordinates} />
        {faves.length > 0 &&
          showFaves &&
          !showRoute &&
          faves.map((fave, index) => {
            const faveCoordinates = [fave.place.geometry.coordinates[1], fave.place.geometry.coordinates[0]];
            return (
              <Marker
                key={index}
                position={faveCoordinates}
                icon={isHighlighted(fave) ? faveHighlight
                  //: fave.isMiddle ? middleIcon
                  : faveIcon}
              >
                <Popup>
                  <div>
                    {fave.name}, {fave.place.properties.street}, {fave.place.properties.postalCode}
                  </div>
                  <button
                    className="directions-button"
                    onClick={() => {
                      handleDirectionsClick(userCoordinates, faveCoordinates);
                      setDestination(fave);
                    }}
                  >
                    Directions
                  </button>
                  <FaveButton
                    result={fave}
                    isInFaves={isInFaves}
                    faves={faves}
                  />
                  <div className="fav-div">Faves: <span className="fav-count">{faveCount(fave)}</span></div>
                </Popup>
              </Marker>
            );
          })}
        {results.length > 0 &&
          !showRoute &&
          results.map((result, index) => {
            const resultCoordinates = [result.place.geometry.coordinates[1], result.place.geometry.coordinates[0]];
            return (
              <Marker
                key={index}
                position={resultCoordinates}
                icon={result.isMiddle && isHighlighted(result) ? middleHighlight : result.isMiddle ? middleIcon : isHighlighted(result) ? highlightIcon : isInFaves(result.id) ? faveIcon : resultIcon}
              >
                <Popup>
                  <div>
                    {result.name}, {result.place.properties.street}, {result.place.properties.postalCode}
                  </div>
                  <button
                    className="directions-button"
                    onClick={() => {
                      handleDirectionsClick(userCoordinates, resultCoordinates);
                      setDestination(result);
                    }}
                  >
                    Directions
                  </button>
                  <FaveButton
                    result={result}
                    isInFaves={isInFaves}
                    faves={faves}
                  />
                  {isInFaves(result.id) && <div>Fave Count: {faveCount(result)}</div>}
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
                <FaveButton
                  result={destination}
                  isInFaves={isInFaves}
                />
              </Popup>
            </Marker>
          </>
        )}
        <SetView coords={userCoordinates} />
      </MapContainer>
      <label className="fav-tab">
        <input
          type="checkbox"
          value={showFaves}
          onChange={() => setShowFaves(!showFaves)}
        />{" "}
        Show {(showFaves) ? "Results" : "Faves"}
      </label>
    </div>
  );
};

export default Map;
