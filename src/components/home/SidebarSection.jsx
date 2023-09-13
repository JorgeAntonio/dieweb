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
    <ul className="md:menu p-4 w-80 min-h-full bg-base-200 text-base-content hidden">
      {eventos.map((evento, index) => (
        <li key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{evento.title}</h3>
          <p className="text-gray-600 text-sm">
            <strong>Fecha:</strong> {evento.descripcion}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Descripción:</strong> {evento.date}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Hora:</strong> {evento.time}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Lugar:</strong> {evento.location}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
