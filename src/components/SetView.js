import { useContext, useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { AppContext } from "./context/AppContext";

const SetView = ({ coords }) => {
  const { rangeValues, showRoute } = useContext(AppContext);
  const [zoom, setZoom] = useState(12);
  const map = useMap();

  // set zoom based on search range
  useEffect(() => {
    const range = rangeValues[0];
    switch (true) {
      case range >= 15:
        setZoom(11);
        break;
      case range >= 5:
        setZoom(12);
        break;
      default:
        setZoom(13);
        break;
    }
    map.setView(coords, zoom);
    map.setZoom(zoom);
  }, [rangeValues, zoom, coords, map, showRoute]);

  return null;
};

export default SetView;
