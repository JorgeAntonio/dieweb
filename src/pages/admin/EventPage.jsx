import { useState } from "react";
import detail from "../../assets/icons/eye.png";
import edit from "../../assets/icons/pen.png";
import trash from "../../assets/icons/trash.png";
import ToastMessage from "../../components/ToastMessage";
import ConfirmEventModal from "../../components/events/ConfirmEventModal";
import EventModal from "../../components/events/EventModal";
import { IconButton } from "../../components/icons/IconButton";
import { useEvents } from "../../context/EventProvider";

const EventPage = () => {
  const { events, msg, setMsg, errorMsg, setErrorMsg } = useEvents();
  const [showEventModal, setShowEventModal] = useState(false);
  const [type, setType] = useState("");
  const [activeEvent, setActiveEvent] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const detailIcon = detail;
  const editIcon = edit;
  const trashIcon = trash;

  const closeConfirmModal = () => {
    setActiveEvent({});
    setShowConfirmModal(false);
  };

  const closeEventModal = () => {
    setActiveEvent({});
    setShowEventModal(false);
    setType("");
  };

  const handleAdd = () => {
    setType("Add");
    setShowEventModal(true);
    document.getElementById("my_modal_4").showModal();
  };

  const handleView = (event) => {
    setActiveEvent(event);
    setType("View");
    setShowEventModal(true);
  };

  return (
    <div className="p-8 md:p-16">
      <ToastMessage
        type="Success"
        show={msg ? true : false}
        message={msg}
        handleClose={() => setMsg("")}
      />
      <ToastMessage
        type="Error"
        show={errorMsg ? true : false}
        message={errorMsg}
        handleClose={() => setErrorMsg("")}
      />
      <EventModal
        show={showEventModal}
        handleClose={closeEventModal}
        type={type}
        event={activeEvent}
      />
      <ConfirmEventModal
        show={showConfirmModal}
        handleClose={closeConfirmModal}
        id={activeEvent.id}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2 className="text-center text-xl font-semibold">
          Mantenimiento de eventos
        </h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          Crear evento
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Lugar</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, idx) => (
              <tr key={idx}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td className="flex gap-2">
                  <IconButton
                    onClick={() => {
                      setActiveEvent(event);
                      setType("View");
                      setShowEventModal(true);
                      document.getElementById("my_modal_4").showModal();
                    }}
                    icon={detailIcon}
                  />
                  <IconButton
                    onClick={() => {
                      setActiveEvent(event);
                      setType("Edit");
                      setShowEventModal(true);
                      document.getElementById("my_modal_4").showModal();
                    }}
                    icon={editIcon}
                  />

                  <IconButton
                    onClick={() => {
                      setActiveEvent(event);
                      setShowConfirmModal(true);
                      document.getElementById("my_modal_3").showModal();
                    }}
                    icon={trashIcon}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventPage;
