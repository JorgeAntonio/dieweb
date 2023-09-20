import { useState } from "react";
import detail from "../../assets/icons/eye.png";
import edit from "../../assets/icons/pen.png";
import trash from "../../assets/icons/trash.png";
import { LoadingSpinner } from "../../components/LoadingSpinner";
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
  };

  const handleViewEvent = (event) => {
    setActiveEvent(event);
    setType("View");
    setShowEventModal(true);
  };

  const handleEditEvent = (event) => {
    setActiveEvent(event);
    setType("Edit");
    setShowEventModal(true);
  };

  const handleDeleteEvent = (event) => {
    setActiveEvent(event);
    setShowConfirmModal(true);
  };

  return (
    <div className="p-8 md:p-16">
      <ToastMessage
        type="Exito"
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
        isOpen={showEventModal}
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
        <h2 className="text text-xl font-semibold">Mantenimiento de eventos</h2>
        <button className="btn btn-primary btn-sm" onClick={handleAdd}>
          Crear
        </button>
      </div>
      <div className="overflow-x-auto">
        {events && events.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Titulo</th>
                <th>Hora</th>
                <th>Lugar</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, idx) => (
                <tr key={idx}>
                  <td>{event.date}</td>
                  <td>{event.name}</td>
                  <td>{event.time}</td>
                  <td>{event.location}</td>
                  <td className="flex gap-2">
                    <IconButton
                      onClick={() => {
                        handleViewEvent(event);
                      }}
                      icon={detail}
                    />
                    <IconButton
                      onClick={() => {
                        handleEditEvent(event);
                      }}
                      icon={edit}
                    />

                    <IconButton
                      onClick={() => {
                        handleDeleteEvent(event);
                      }}
                      icon={trash}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default EventPage;
