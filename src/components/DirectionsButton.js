import React, { useContext } from "react";
import { fetchRoute } from "../utils/services";
import { AppContext } from "./context/AppContext";

const DirectionsButton = ({ destination }) => {
  const { setShowRoute, setDestination, userCoordinates, setRoute } = useContext(AppContext);

  const destinationCoordinates = [destination.place.geometry.coordinates[1], destination.place.geometry.coordinates[0]];

  const handleDirectionsClick = async (userCoords, destinationCoords) => {
    const fetchedRoute = await fetchRoute(userCoords, destinationCoords);
    setRoute(fetchedRoute);
    setShowRoute(true);
  };

  return (
    <button
      className="directions-button"
      onClick={() => {
        handleDirectionsClick(userCoordinates, destinationCoordinates);
        setDestination(destination);
      }}
    >
      Directions
    </button>
  );
};

export default DirectionsButton;
