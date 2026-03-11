import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useRealtimePotholes from "../hooks/useRealtimePotholes";

function MapView() {

  const potholes = useRealtimePotholes();

  return (

    <MapContainer
      center={[13.0827, 80.2707]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {potholes.map(p => (

        <Marker
          key={p.id}
          position={[p.latitude, p.longitude]}
        >

          <Popup>

            <img
              src={p.imageUrl}
              width="200"
              alt="pothole"
            />

            <p>Latitude: {p.latitude}</p>
            <p>Longitude: {p.longitude}</p>
            <p>{p.timestamp}</p>

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );
}

export default MapView;