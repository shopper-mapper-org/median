import { useMap } from "react-leaflet";

const SetView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());
  map.setZoom(12);
  return null;
};

export default SetView;
