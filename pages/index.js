import { useState } from "react";
import DeviceList from "../components/DeviceList";
import DeviceDetails from "../components/DeviceDetails";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div className="container-fluid d-flex vh-100 bg-dark text-white">
      <DeviceList onSelectDevice={setSelectedDevice} />
      <Map />
      {selectedDevice && <DeviceDetails device={selectedDevice} onClose={() => setSelectedDevice(null)} />}
    </div>
  );
}