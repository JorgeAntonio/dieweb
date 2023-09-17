import { useEffect, useState } from "react";
import { useEvents } from "../../context/EventProvider";

const ConfirmEventModal = ({ show, handleClose, id }) => {
  const [loading, setLoading] = useState(false);
  const { setErrorMsg, deleteEvent } = useEvents();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      await deleteEvent(id);
      handleClose();
    } catch (error) {
      console.error(error);
      setErrorMsg("Error in deleting the event");
    }
    setLoading(false);
  };

  // Agregar un efecto para abrir o cerrar el modal según el valor de 'show'
  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (show) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [show]);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Eliminar evento</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <p>¿Está seguro que desea eliminar el evento?</p>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" disabled={loading} onClick={handleDelete}>
              Sí
            </button>
            <button className="btn" onClick={handleClose}>
              No
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmEventModal;
