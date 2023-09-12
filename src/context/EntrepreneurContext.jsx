import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createEntrepreneur,
  deleteEntrepreneur,
  readEntrepreneur,
  readEntrepreneurs,
} from "../supabase/CrudEntrepreneur.jsx";
import { supabase } from "../supabase/supabase.client.jsx";

const EntrepreneurContext = createContext(null);

export const EntrepreneurContextProvider = ({ children }) => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [entrepreneur, setEntrepreneur] = useState([]);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");

  async function loadEntrepreneurs() {
    try {
      const data = await readEntrepreneurs();
      setEntrepreneurs(data);
      if (data) {
        setNotification("Emprendedores cargados exitosamente");
      }
      if (error) {
        setError("Error al cargar los emprendedores: " + error.message);
      }
    } catch (error) {
      console.log("Error al cargar los emprendedores: " + error.message);
      setError("Error al cargar los emprendedores: " + error.message);
    }
  }

  useEffect(() => {
    // Carga los emprendedores
    loadEntrepreneurs();

    async function subscribeToEntrepreneurs() {
      try {
        const subscription = supabase
          .channel("custom-all-channel")
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "entrepreneurs" },
            (payload) => {
              const { new: newEntrepreneur } = payload;
              const { old: oldEntrepreneur } = payload;
              const { action } = payload;
              if (action === "INSERT") {
                setEntrepreneurs([...entrepreneurs, newEntrepreneur]);
              }
              if (action === "UPDATE") {
                const index = entrepreneurs.findIndex(
                  (entrepreneur) => entrepreneur.id === oldEntrepreneur.id
                );
                const updatedEntrepreneurs = [...entrepreneurs];
                updatedEntrepreneurs[index] = newEntrepreneur;
                setEntrepreneurs(updatedEntrepreneurs);
              }
              console.log("Change received!", payload);
            }
          )
          .subscribe();
        return subscription;
      } catch (error) {
        console.log(
          "Error al suscribirse a los emprendedores: " + error.message
        );
        setError("Error al suscribirse a los emprendedores: " + error.message);
      }
    }

    // Suscríbete a los cambios en la base de datos
    const subscription = subscribeToEntrepreneurs();

    // Cuando se desmonte el componente, cancela la suscripción
    return () => {
      subscription.then((data) => data.unsubscribe());
    };
  }, [loadEntrepreneurs]);

  async function insertEntrepreneur(
    name,
    lastName,
    dni,
    email,
    phone,
    address,
    startup,
    status
  ) {
    try {
      const data = await createEntrepreneur(
        name,
        lastName,
        dni,
        email,
        phone,
        address,
        startup,
        status
      );
      setEntrepreneurs([...entrepreneurs, data]);
      if (data) {
        setNotification("Emprendedor creado exitosamente");
      }
      if (error) {
        setError("Error al crear el emprendedor: " + error.message);
      }
    } catch (error) {
      console.log("Error al crear el emprendedor: " + error.message);
      setError("Error al crear el emprendedor: " + error.message);
    }
  }

  async function updateEntrepreneur(id, name, startup, status) {
    try {
      const data = await updateEntrepreneur(id, name, startup, status);
      setEntrepreneurs(data);
      if (data) {
        setNotification("Emprendedor actualizado exitosamente");
      }
      if (error) {
        setError("Error al actualizar el emprendedor: " + error.message);
      }
    } catch (error) {
      console.log("Error al actualizar el emprendedor: " + error.message);
      setError("Error al actualizar el emprendedor: " + error.message);
    }
  }

  async function removeEntrepreneur(id) {
    try {
      const data = await deleteEntrepreneur(id);
      setEntrepreneurs(data.filter((entrepreneur) => entrepreneur.id !== id));
      if (data) {
        setNotification("Emprendedor eliminado exitosamente");
      }
      if (error) {
        setError("Error al eliminar el emprendedor: " + error.message);
      }
    } catch (error) {
      console.log("Error al cargar los emprendedores: " + error.message);
      setError("Error al cargar los emprendedores: " + error.message);
    }
  }

  async function loadEntrepreneur(id) {
    try {
      const data = await readEntrepreneur(id);
      setEntrepreneur(data);
      if (data) {
        setNotification("Emprendedor cargado exitosamente");
      }
      if (error) {
        setError("Error al cargar el emprendedor: " + error.message);
      }
    } catch (error) {
      console.log("Error al cargar el emprendedor: " + error.message);
      setError("Error al cargar el emprendedor: " + error.message);
    }
  }

  return (
    <EntrepreneurContext.Provider
      value={{
        entrepreneurs,
        entrepreneur,
        notification,
        error,
        insertEntrepreneur,
        removeEntrepreneur,
        loadEntrepreneurs,
        updateEntrepreneur,
        loadEntrepreneur,
      }}
    >
      {children}
    </EntrepreneurContext.Provider>
  );
};

EntrepreneurContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useEntrepreneurContext = () => {
  return useContext(EntrepreneurContext);
};
