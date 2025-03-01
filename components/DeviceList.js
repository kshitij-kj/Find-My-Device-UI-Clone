import { useState } from "react";
import { devices } from "../data/devices";

export default function DeviceList({ onSelectDevice }) {
  const [search, setSearch] = useState("");

  return (
    <div className="col-3 bg-secondary p-3 overflow-auto">
      <input
        type="text"
        placeholder="Search device..."
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group">
        {devices
          .filter((device) => device.name.toLowerCase().includes(search.toLowerCase()))
          .map((device) => (
            <li
              key={device.id}
              className="list-group-item list-group-item-action bg-dark text-white mb-2 rounded"
              onClick={() => onSelectDevice(device)}
              style={{ cursor: "pointer" }}
            >
              <strong>{device.name}</strong>
              <p className="mb-0">{device.location}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}