import React, { useEffect } from "react";

import { Marker } from "react-leaflet";
import { useMap } from "react-leaflet";
import { locationIcon } from "../utils/icons";

const UserMarker = ({ userCoordinates, zoom = 12 }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(userCoordinates, zoom, {
      animate: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCoordinates]);
  return (
    <Marker
      position={userCoordinates}
      icon={locationIcon}
    ></Marker>
  );
};

export default UserMarker;
