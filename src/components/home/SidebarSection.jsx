import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase.client";
import { CutWordsEvent } from "../../utils/Utils";

const Sidebar = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  async function getEvents() {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "activo")
        .order("date", { ascending: true })
        .limit(3);
      if (error) throw error;
      if (data) {
        setEventos(data);
        console.log("Eventos cargados correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mx-2 my-4">
        <h2 className="text-2xl font-semibold">Eventos</h2>
        <button
          onClick={() => {
            navigate("/eventos");
          }}
          className="btn btn-ghost btn-xs"
        >
          Ver todos
        </button>
      </div>
      <div className="divider"></div>
      {eventos.map((evento, index) => (
        <li key={index} className="pb-4">
          <div className="flex flex-col gap-3 bg-base-300 hover:bg-base-100">
            <div className="flex flex-col gap-2 w-full p-2">
              <h3 className="text-base font-medium">{evento.name}</h3>
              <p className="text-sm">
                {CutWordsEvent(evento.description) + "..."}
              </p>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-base-content">
                  {evento.date}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default Sidebar;
