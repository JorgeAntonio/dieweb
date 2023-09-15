import { Toast, ToastContainer } from "react-bootstrap";

const ToastMessage = ({ show, type, message, handleClose }) => {
  return (
    <ToastContainer position="top-end">
      <Toast
        className="d-inline-block m-1"
        bg="light"
        onClose={handleClose}
        show={show}
        delay={5000}
        autohide>
        <Toast.Header>
          <strong className="me-auto">{type}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastMessage;
