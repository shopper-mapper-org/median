import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { locationIcon, resultIcon } from '../utils/icons';
import 'leaflet/dist/leaflet.css';
import { fetchResults } from '../utils/services';

const Map = ({ userQuery, userCoordinates, results, setResults }) => {
  useEffect(() => {
    const getResults = async () => {
      const fetchedResults = await fetchResults(userQuery, userCoordinates);
      setResults(fetchedResults);
    };
    getResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userQuery, userCoordinates]);

  return (
    <div className='map-view'>
      <div className='container'>
        <h2>Map</h2>
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
            results.map((result, index) => {
              return (
                <Marker
                  key={index}
                  position={[result.place.geometry.coordinates[1], result.place.geometry.coordinates[0]]}
                  icon={resultIcon}
                >
                  <Popup>{result.displayString}</Popup>
                </Marker>
              );
            })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
