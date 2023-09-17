import PropTypes from "prop-types";
import { useState } from "react";

export default function DetailsModal(props) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {isEditing ? (
            // Vista de edición
            <div>
              {/* Formulario de edición */}
              {/* ... (Agrega los campos de edición aquí) */}
              <div className="modal-action">
                <button className="btn">Actualizar</button>
                <button className="btn" onClick={toggleEditing}>
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-lg mb-4">Detalles</h3>
              <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <label className="font-semibold">Nombre:</label>
                    <label className="font-semibold">Apellido:</label>
                    <label className="font-semibold">DNI:</label>
                    <label className="font-semibold">Email:</label>
                    <label className="font-semibold">Teléfono:</label>
                    <label className="font-semibold">Dirección:</label>
                    <label className="font-semibold">Startu:p</label>
                    <label className="font-semibold">Estado:</label>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-4">
                    <p className="">{props.name}</p>
                    <p className="">{props.lastname}</p>
                    <p className="">{props.dni}</p>
                    <p className="">{props.email}</p>
                    <p className="">{props.phone}</p>
                    <p className="">{props.address}</p>
                    <p className="">{props.startup}</p>
                    <p className="">{props.status}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

DetailsModal.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  dni: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  startup: PropTypes.string,
  status: PropTypes.string,
};
