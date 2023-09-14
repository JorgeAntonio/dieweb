import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.client";

const Sidebar = () => {
  const [eventos, setEventos] = useState([]);

  const getEvents = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "activo");
      if (error) throw error;
      if (data) {
        setEventos(data);
        console.log("Eventos cargados correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <ul className="md:menu p-4 w-70 min-h-full bg-base-200 text-base-content hidden">
      {eventos.map((evento, index) => (
        <li key={index} className="mb-4">
          <div className="card bg-base-300 hover:bg-base-content hover:text-base-100">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{evento.title}</h3>
              <p className="text-sm limit-text">{evento.description}</p>
              <p className="text-sm">
                <strong>Fecha:</strong> {evento.date}
              </p>
              <p className="text-sm">
                <strong>Hora:</strong> {evento.time}
              </p>
              <p className="text-sm">
                <strong>Lugar:</strong> {evento.location}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
