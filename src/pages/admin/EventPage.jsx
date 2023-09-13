import {useState} from "react";
import EventTable from "../../components/events/EventsTable.jsx";
import CreateEventModal from "../../components/events/CreateEventModal.jsx";


function EventPage() {
    const [notification, setNotification] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenFormModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <div className="p-4 md:p-8">
                <CreateEventModal open={openModal} onClose={handleCloseModal}/>
                {notification && <div className="alert">{notification}</div>}
                <EventTable/>
            </div>
        </>
    );
}

export default EventPage;
