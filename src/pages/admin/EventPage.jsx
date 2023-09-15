import { useState } from "react";
import CreateEventModal from "../../components/events/CreateEventModal.jsx";
import EventTable from "../../components/events/EventsTable.jsx";

function EventPage() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="p-4 md:p-8">
      <CreateEventModal open={openModal} onClose={handleCloseModal} />
      <EventTable />
    </div>
  );
}

export default EventPage;
