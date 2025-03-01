import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { devices } from "../data/devices";
import L from "leaflet";

// Fix Leaflet marker icon issues in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x-red.png",
  iconUrl: "/marker-icon-red.png",
  shadowUrl: "/marker-shadow.png",
});

export default function MapOnly() {
  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} className="h-100 w-100">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {devices.map((device) => (
        <Marker key={device.id} position={[device.lat, device.lng]}>
          <Popup>{device.name} - {device.location}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}