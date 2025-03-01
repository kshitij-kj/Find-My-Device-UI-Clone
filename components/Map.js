import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapOnly"), { ssr: false });

export default function Map() {
  return <MapComponent />;
}