import { createContext, useContext, useEffect, useState } from "react";
import {
  createEntrepreneur,
  deleteEntrepreneur,
  readEntrepreneurs,
} from "../supabase/CrudEntrepreneur.jsx";

const EntrepreneurContext = createContext(null);

export const EntrepreneurContextProvider = ({ children }) => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");

  async function showEntrepreneurs() {
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

  async function insertEntrepreneur(name, startup, status) {
    try {
      if (!name || !startup || !status) {
        setNotification(
          "Error al crear el emprendedor: Debe ingresar todos los datos"
        );
      }

      const data = await createEntrepreneur(name, startup, status);
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

  useEffect(() => {
    showEntrepreneurs().then(() =>
      console.log("Emprendedores cargados exitosamente")
    );
  }, [notification, error, showEntrepreneurs]);

  return (
    <EntrepreneurContext.Provider
      value={{
        entrepreneurs,
        notification,
        error,
        insertEntrepreneur,
        removeEntrepreneur,
        showEntrepreneurs,
        updateEntrepreneur,
      }}
    >
      {children}
    </EntrepreneurContext.Provider>
  );
};

export const useEntrepreneurContext = () => useContext(EntrepreneurContext);
