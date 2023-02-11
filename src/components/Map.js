import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const coords = [43.65107, -79.347015];
  const customIcon = new Icon({
    iconUrl: 'https://assets.mapquestapi.com/icon/v2/circle-md-F8E71C-417505-A.png',
    iconSize: 50,
  });
  console.log(customIcon);
  return (
    <div className='map-view'>
      <div className='container'>
        <h2>Map</h2>
        <MapContainer
          center={coords}
          zoom={13}
          scrollWheelZoom={false}
          height='100vh'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker
            position={coords}
            icon={customIcon}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
