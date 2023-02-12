import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';

const createRoutineMachineLayer = ({ route }) => {
  console.log(route);
  // create waypoints from route data
  const waypoints = route.legs[0].maneuvers.map((maneuver) => {
    return L.latLng(+`${maneuver.startPoint.lat}`, +`${maneuver.startPoint.lng}`);
  });
  // show endpoint marker
  // TODO
  const instance = L.Routing.control({
    waypoints: waypoints,
    lineOptions: {
      styles: [{ color: 'red', weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function () {
      return null;
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
