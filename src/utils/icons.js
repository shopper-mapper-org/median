import { Icon } from 'leaflet';

const locationIcon = new Icon({
  iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker-md.png',
  iconSize: 25,
});

const resultIcon = new Icon({
  iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker-sm-F8E71C-417505.png',
  iconSize: 25,
});

export { locationIcon, resultIcon };
