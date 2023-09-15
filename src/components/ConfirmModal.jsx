import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useBlogs } from "../context/BlogContext";

const ConfirmModal = ({ show, handleClose, id }) => {
  const [loading, setLoading] = useState(false);
  const { setErrorMsg, deleteContact } = useBlogs();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      await deleteContact(id);
      handleClose();
    } catch (error) {
      console.error(error);
      setErrorMsg("Error in deleting the contact");
    }
    setLoading(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="text-center" closeButton>
        <h2>Delete Contact</h2>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want to delete the contact?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button disabled={loading} variant="danger" onClick={handleDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
