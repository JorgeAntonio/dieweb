import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useContacts } from "../../context/EntrepreneurProvider";
import { Divider } from "../Divider";
import ToastMessage from "../ToastMessage";

const EntrepreneurModal = ({ isOpen, handleClose, type, contact }) => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);
  const startupRef = useRef(null);
  const statusRef = useRef("activo");
  const lastnameRef = useRef(null);
  const dniRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const { addContact, setErrorMsg, editContact, fetchById } = useContacts();
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setMsg("");
      setLoading(true);
      if (
        !nameRef.current?.value ||
        !phoneRef.current?.value ||
        !addressRef.current?.value ||
        !startupRef.current?.value ||
        !lastnameRef.current?.value ||
        !dniRef.current?.value ||
        !emailRef.current?.value ||
        !statusRef.current?.value
      ) {
        setErrorMsg("Por favor llena todos los campos");
        setMsg("Por favor llena todos los campos");
        setLoading(false);
        return;
      }
      const contactToSave = {
        name: nameRef.current.value,
        startup: startupRef.current.value,
        status: statusRef.current.value,
        lastname: lastnameRef.current.value,
        dni: dniRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
      };
      if (type === "Edit") {
        await editContact(contactToSave, contact.id);
      }
      if (type === "View") {
        await fetchById(contact.id);
      }
      if (type === "Add") {
        await addContact(contactToSave);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Error en guardar emprendedor");
      setMsg("Error en guardar emprendedor");
    }
    setLoading(false);
    handleClose();
  };

  useEffect(() => {
    const modal = document.getElementById("my_modal_4");
    if (isOpen) {
      modal.showModal();
    }
  }, [isOpen]);

  return isOpen ? (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Agregar evento</h3>
        <p className="py-4">
          Presiona la tecla Esc o el boton de Cancelar para cerrar.
        </p>
        {type === "View" ? (
          <div className="flex flex-col justify-between items-start gap-2">
            <p>
              <strong>Nombres:</strong> {contact?.name}
            </p>
            <Divider />
            <p>
              <strong>Apellidos:</strong> {contact?.lastname}
            </p>
            <Divider />
            <p>
              <strong>DNI:</strong> {contact?.dni}
            </p>
            <Divider />
            <p>
              <strong>Startup:</strong> {contact?.startup}
            </p>
            <Divider />
            <p>
              <strong>Email:</strong> {contact?.email}
            </p>
            <Divider />
            <p>
              <strong>Telefono:</strong> {contact?.phone}
            </p>
            <Divider />
            <p>
              <strong>Dirección:</strong> {contact?.address}
            </p>
            <Divider />
            <p>
              <strong>Estado:</strong> {contact?.status}
            </p>
            <Divider />
          </div>
        ) : (
          <section className="modal-action">
            <ToastMessage
              type="Error"
              show={msg ? true : false}
              message={msg}
              handleClose={() => setMsg("")}
            />
            <div className="w-full pb-8">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Nombres</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-md"
                    ref={nameRef}
                    defaultValue={contact?.name ?? ""}
                    required
                    autoFocus
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Apellidos</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-md"
                    ref={lastnameRef}
                    defaultValue={contact?.lastname ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">DNI</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={dniRef}
                    defaultValue={contact?.dni ?? ""}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Startup</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={startupRef}
                    defaultValue={contact?.startup ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="email"
                    ref={emailRef}
                    defaultValue={contact?.email ?? ""}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Telefono</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={phoneRef}
                    defaultValue={contact?.phone ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Direccion</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={addressRef}
                    defaultValue={contact?.address ?? ""}
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Estado</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-md"
                      type="select"
                      ref={statusRef}
                      defaultValue={contact?.status ?? ""}
                      required
                    >
                      <option value="activo">Activo</option>
                      <option value="inactivo">Inactivo</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <div className="modal-action">
          <form method="dialog">
            {type === "View" ? (
              <>
                <button className="btn" onClick={handleClose}>
                  Cancelar
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                {loading ? (
                  <button disabled className="btn btn-primary">
                    Guardando...
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Guardar
                  </button>
                )}
                <button className="btn" onClick={handleClose}>
                  Cancelar
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </dialog>
  ) : null;
};

EntrepreneurModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  contact: PropTypes.object,
};

export default EntrepreneurModal;
