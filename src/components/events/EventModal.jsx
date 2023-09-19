import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useEvents } from "../../context/EventProvider";
import { Divider } from "../Divider";
import ToastMessage from "../ToastMessage";

const EventModal = ({ isOpen, handleClose, type, event }) => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const descriptionRef = useRef(null);
  const timeRef = useRef(null);
  const locationRef = useRef(null);
  const linkRef = useRef(null);
  const imageRef = useRef(null);
  const statusRef = useRef("activo");
  const { addEvent, setErrorMsg, editEvent, fetchEvent } = useEvents();
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setMsg("");
      setLoading(true);
      if (
        !nameRef.current?.value ||
        !dateRef.current?.value ||
        !descriptionRef.current?.value ||
        !timeRef.current?.value ||
        !locationRef.current?.value ||
        !linkRef.current?.value ||
        !imageRef.current?.value
      ) {
        setErrorMsg("Por favor llena todos los campos");
        setMsg("Por favor llena todos los campos");
        setLoading(false);
        return;
      }
      const eventToSave = {
        name: nameRef.current.value,
        date: dateRef.current.value,
        description: descriptionRef.current.value,
        time: timeRef.current.value,
        location: locationRef.current.value,
        link: linkRef.current.value,
        image: imageRef.current.value,
        status: statusRef.current.value,
      };
      if (type === "Edit") {
        await editEvent(eventToSave, event.id);
      }
      if (type === "View") {
        await fetchEvent(event.id);
      }

      if (type === "Add") {
        await addEvent(eventToSave);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Error en guardar evento");
      setMsg("Error en guardar evento");
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
              <strong>Titulo:</strong> {event?.name}
            </p>
            <Divider />
            <p>
              <strong>Descripción:</strong> {event?.description}
            </p>
            <Divider />
            <p>
              <strong>Fecha:</strong> {event?.date}
            </p>
            <Divider />
            <p>
              <strong>Hora:</strong> {event?.time}
            </p>
            <Divider />
            <p>
              <strong>Lugar:</strong> {event?.location}
            </p>
            <Divider />
            <p>
              <strong>Enlace:</strong> {event?.link}
            </p>
            <Divider />
            <p>
              <strong>Portada:</strong> {event?.image}
            </p>
            <Divider />
            <p>
              <strong>Status:</strong> {event?.status}
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
                    <span className="label-text">Titulo</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-md"
                    ref={nameRef}
                    defaultValue={event?.name ?? ""}
                    required
                    autoFocus
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Descripción</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered textarea-sm w-full"
                    placeholder="Escribe aquí"
                    ref={descriptionRef}
                    defaultValue={event?.description ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Fecha</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="date"
                    ref={dateRef}
                    defaultValue={event?.date ?? ""}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Hora</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="time"
                    ref={timeRef}
                    defaultValue={event?.time ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Lugar</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={locationRef}
                    defaultValue={event?.location ?? ""}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Enlace</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={linkRef}
                    defaultValue={event?.link ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Imagen</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={imageRef}
                    defaultValue={event?.image ?? ""}
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
                      defaultValue={event?.status ?? ""}
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

EventModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  event: PropTypes.object,
};

export default EventModal;
