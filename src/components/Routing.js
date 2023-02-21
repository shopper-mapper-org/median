import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const Routing = ({ route }) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;

    // create waypoints from route data
    const waypoints = route.locations.map((location) => {
      return L.latLng(+`${location.latLng.lat}`, +`${location.latLng.lng}`);
    });

    const routingControl = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: false,
      show: true,
      createMarker: function () {
        return null;
      },
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, route.locations]);

  return null;
};

export default Routing;
