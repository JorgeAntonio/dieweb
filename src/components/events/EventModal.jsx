import { useRef, useState } from "react";
import { useEvents } from "../../context/EventProvider";

const EventModal = ({ show, handleClose, type, event }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
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
        alert("Please fill in all the fields");
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
      setErrorMsg("Error in saving event");
    }
    setLoading(false);
    handleClose();
  };

  return show ? (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Agregar evento</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action" onSubmit={handleSubmit}>
          <form method="dialog">
            {type === "View" ? (
              <>
                <p>
                  <strong>Titulo:</strong> {event?.name}
                </p>
                <p>
                  <strong>Descripción:</strong> {event?.description}
                </p>
                <p>
                  <strong>Fecha:</strong> {event?.date}
                </p>
                <p>
                  <strong>Hora:</strong> {event?.time}
                </p>
                <p>
                  <strong>Lugar:</strong> {event?.location}
                </p>
                <p>
                  <strong>Enlace:</strong> {event?.link}
                </p>
                <p>
                  <strong>Portada:</strong> {event?.image}
                </p>
                <p>
                  <strong>Status:</strong> {event?.status}
                </p>
              </>
            ) : (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Titulo</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    ref={nameRef}
                    defaultValue={event?.name ?? ""}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Titulo</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    ref={descriptionRef}
                    defaultValue={event?.description ?? ""}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Fecha</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="date"
                    ref={dateRef}
                    defaultValue={event?.date ?? ""}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Hora</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="time"
                    ref={timeRef}
                    defaultValue={event?.time ?? ""}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Lugar</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    ref={locationRef}
                    defaultValue={event?.location ?? ""}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enlace</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    ref={linkRef}
                    defaultValue={event?.link ?? ""}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Imagen</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    ref={imageRef}
                    defaultValue={event?.image ?? ""}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Estado</span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    type="select"
                    ref={statusRef}
                    defaultValue={event?.status ?? ""}
                    required
                  >
                    <option disabled selected>
                      Who shot first?
                    </option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                  <input
                    className="input input-bordered"
                    type="select"
                    ref={statusRef}
                    defaultValue={event?.status ?? ""}
                    required
                  />
                </div>
              </>
            )}
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={handleClose}>
              Cerrar
            </button>
            {type === "View" ? (
              <>
                <button className="btn" onClick={handleClose}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button className="btn" onClick={handleClose}>
                  Cancelar
                </button>
                {loading ? (
                  <button disabled className="btn btn-primary">
                    Guardando...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </dialog>
  ) : null;
};

export default EventModal;
