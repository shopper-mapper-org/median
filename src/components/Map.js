import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { locationIcon, resultIcon } from '../utils/icons';
import 'leaflet/dist/leaflet.css';
import { fetchResults, fetchRoute } from '../utils/services';
import RoutingMachine from './RoutingMachine';

const Map = ({ userQuery, userCoordinates, results, setResults }) => {
  const [route, setRoute] = useState([]);
  const [showRoute, setShowRoute] = useState(false);
  const [destination, setDestination] = useState(null);
  useEffect(() => {
    const getResults = async () => {
      const fetchedResults = await fetchResults(userQuery, userCoordinates);
      setResults(fetchedResults);
    };
    getResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userQuery, userCoordinates]);

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
    <div className='map-view'>
      <div className='container'>
        <h2>Map</h2>
        <button onClick={handleBackToResultsClick}>Back to results</button>
        <MapContainer
          center={userCoordinates}
          zoom={13}
          scrollWheelZoom={false}
          height='100vh'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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
              <RoutingMachine route={route} />
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
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
