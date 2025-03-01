import { Modal, Button } from "react-bootstrap";

export default function DeviceDetails({ device, onClose }) {
  if (!device) return null;

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{device.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <p><strong>Location:</strong> {device.location}</p>
        <Button variant="danger" className="me-2" onClick={() => alert(`Factory reset initiated for ${device.name}`)}>
          Factory Reset
        </Button>
        <Button variant="success" onClick={() => alert(`${device.name} is ringing...`)}>
          Ring Device
        </Button>
      </Modal.Body>
    </Modal>
  );
}