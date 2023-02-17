import { useMap } from "react-leaflet";

const SetView = ({ coords }) => {
  console.log("setting view", coords);
  const map = useMap();
  map.setView(coords, map.getZoom());
  map.setZoom(13);
  return null;
};

export default SetView;
