import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../components/entrepreneurs/EntrepreneursTable.jsx";
import { useEntrepreneurContext } from "../../context/EntrepreneurContext.jsx";
import { supabase } from "../../supabase/supabase.client.jsx";

function EntrepreneursPage() {
  const { entrepreneurs, removeEntrepreneur } = useEntrepreneurContext();
  const [notification, setNotification] = useState("");

  async function handleDeleteEntrepreneur(id) {
    await removeEntrepreneur(id);
    setNotification(`Solicitud de Emprendedor ${id} eliminada.`);
  }

    // setTimeout(() => {
    //   setNotification(null);
    // }, 5000);

  useEffect(() => {
    supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "entrepreneurs" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
  }, []);

  return (
    <div className="mx-auto p-4 md:p-8">
      <div className="flex justify-between pb-4">
        <h1 className="text-2xl font-bold">Emprendedores</h1>
        <Link to="registrar">
          <button className={"btn btn-primary"}>Agregar Nuevo</button>
        </Link>
      </div>
      {notification && <div className="alert">{notification}</div>}
      <DataTable />
    </div>
  );
}

export default EntrepreneursPage;
