import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../components/entrepreneurs/EntrepreneursTable.jsx";
import { supabase } from "../../supabase/supabase.client.jsx";

function EntrepreneursPage() {
  const [notification] = useState("");

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
    <div className="p-4 md:p-8">
      <div className="flex justify-between pb-8">
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
