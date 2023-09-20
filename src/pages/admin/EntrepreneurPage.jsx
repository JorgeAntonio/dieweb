import { useState } from "react";
import detail from "../../assets/icons/eye.png";
import edit from "../../assets/icons/pen.png";
import trash from "../../assets/icons/trash.png";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import ToastMessage from "../../components/ToastMessage";
import ConfirmModal from "../../components/entrepreneur/ConfirmModal";
import EntrepreneurModal from "../../components/entrepreneur/EntrepreneurModal";
import { IconButton } from "../../components/icons/IconButton";
import { useContacts } from "../../context/EntrepreneurProvider";

const EntrepreneurPage = () => {
  const { contacts, msg, setMsg, errorMsg, setErrorMsg } = useContacts();
  const [showEntrepreneurModal, setShowEntrepreneurModal] = useState(false);
  const [type, setType] = useState("");
  const [activeContact, setActiveContact] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const closeConfirmModal = () => {
    setActiveContact({});
    setShowConfirmModal(false);
  };

  const closeEntrepreneurModal = () => {
    setActiveContact({});
    setShowEntrepreneurModal(false);
    setType("");
  };

  const handleAdd = () => {
    setType("Add");
    setShowEntrepreneurModal(true);
  };

  const handleViewContact = (contact) => {
    setActiveContact(contact);
    setType("View");
    setShowEntrepreneurModal(true);
  };

  const handleEditContact = (contact) => {
    setActiveContact(contact);
    setType("Edit");
    setShowEntrepreneurModal(true);
  };

  const handleDeleteContact = (contact) => {
    setActiveContact(contact);
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
      <EntrepreneurModal
        isOpen={showEntrepreneurModal}
        handleClose={closeEntrepreneurModal}
        type={type}
        contact={activeContact}
      />
      <ConfirmModal
        show={showConfirmModal}
        handleClose={closeConfirmModal}
        id={activeContact.id}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <h2 className="text-xl font-semibold">
          Mantenimiento de emprendedores
        </h2>
        <button className="btn btn-primary btn-sm" onClick={handleAdd}>
          Crear
        </button>
      </div>
      <div className="overflow-x-auto">
        {contacts && contacts.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th>Startup</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <tr key={idx}>
                  <td>{contact.name}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.startup}</td>
                  <td className="d-flex flex-row justify-content-around">
                    <IconButton
                      onClick={() => {
                        handleViewContact(contact);
                      }}
                      icon={detail}
                    />
                    <IconButton
                      onClick={() => {
                        handleEditContact(contact);
                      }}
                      icon={edit}
                    />
                    <IconButton
                      onClick={() => {
                        handleDeleteContact(contact);
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

export default EntrepreneurPage;
