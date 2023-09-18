import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.client";

const ContactContext = createContext({});

export const useContacts = () => useContext(ContactContext);

const EntrepreneurProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");

  const addContact = async (contact) => {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .insert(contact)
      .select();
    if (data) {
      setContacts((prevContacts) => [...prevContacts, data[0]]);
      setMsg("Emprendedor agregado exitosamente");
    }
    if (error) {
      setErrorMsg(error.message);
    }
  };

  const fetchAll = async () => {
    const { data, error } = await supabase.from("entrepreneurs").select();
    if (data) setContacts(data);
    if (error) setErrorMsg("Error cargando emprendedores");
  };

  const fetchById = async (id) => {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      setErrorMsg(error.message);
    }
    if (data) {
      setMsg("Emprendedor actualizado exitosamente");
      const updatedContacts = contacts.map((contact) => {
        if (id === contact.id) {
          return { ...contact, ...data[0] };
        }
        return contact;
      });
      setContacts(updatedContacts);
    }
  };

  const editContact = async (contact, id) => {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .update(contact)
      .eq("id", id)
      .select();
    if (error) {
      setErrorMsg(error.message);
      console.error(error);
    }
    if (data) {
      setMsg("Emprendedor actualizado exitosamente");
      const updatedContacts = contacts.map((contact) => {
        if (id === contact.id) {
          return { ...contact, ...data[0] };
        }
        return contact;
      });
      setContacts(updatedContacts);
    }
  };

  const deleteContact = async (id) => {
    const { error } = await supabase
      .from("entrepreneurs")
      .delete()
      .eq("id", id);
    if (error) {
      setErrorMsg(error.message);
    } else {
      setMsg("Emprendedor eliminado exitosamente");
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        msg,
        setMsg,
        errorMsg,
        setErrorMsg,
        addContact,
        fetchAll,
        fetchById,
        editContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

EntrepreneurProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EntrepreneurProvider;
