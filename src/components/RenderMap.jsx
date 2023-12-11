import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function RenderMap( {restaurants} ) {
     // Hardcoded latitude and longitude values
  const latitude = restaurants[0].coordinates.latitude;
  const longitude = restaurants[0].coordinates.longitude;
  return (
    <div>
      <MapContainer
        style={{ height: "400px", width: "50vw" }}
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants.map((restaurant, index) => (
          <Marker key={index} position={[restaurant.coordinates.latitude, restaurant.coordinates.longitude]}>
            <Popup>
              {restaurant.name} <br /> {restaurant.location.address1}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}