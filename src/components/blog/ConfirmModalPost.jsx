import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { usePosts } from "../../context/PostProvider";

const ConfirmModalPost = ({ show, handleClose, id }) => {
  const [loading, setLoading] = useState(false);
  const { setErrorMsg, deletePost } = usePosts();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      await deletePost(id);
      handleClose();
    } catch (error) {
      console.error(error);
      setErrorMsg("Error in deleting the post");
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
        <p className="py-4"> Precione el boton ESC o click No para cerrar </p>
        <p className="py-4 text-lg font-semibold">
          ¿Está seguro que desea eliminar el evento?
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn" disabled={loading} onClick={handleDelete}>
              Sí
            </button>
            <button className="btn btn-primary" onClick={handleClose}>
              No
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

ConfirmModalPost.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // id: PropTypes.string.isRequired,
};

export default ConfirmModalPost;
