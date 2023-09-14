import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase.client.jsx";
import EventDetailModal from "./EventDetailModal.jsx";

export default function EventTable() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventsData, setEventsData] = useState([]); // Aquí se guardan los datos de los eventos

  async function getEvents() {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("id", { ascending: true });
      if (error) throw error;
      if (data) {
        setEventsData(data);
        console.log("Eventos cargados correctamente");
      }
    } catch (e) {
      console.log("Error cargando eventos:" + e.message);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="h-[450px]">
      {selectedEvent && (
        <EventDetailModal
          open={true} // Abre el modal cuando selectedEvent no es nulo
          handleClose={() => {
            setSelectedEvent(null); // Cierra el modal y borra el emprendedor seleccionado
          }}
          {...selectedEvent}
        />
      )}
      <DataGrid
        rows={eventsData?.map((event) => ({
          id: event?.id ? event.id : "",
          name: event?.name ? event.name : "",
          description: event?.description ? event.description : "",
          date: event?.date ? event.date : "",
          time: event?.time ? event.time : "",
          location: event?.location ? event.location : "",
          image: event?.image ? event.image : "",
          link: event?.link ? event.link : "",
          status: event?.status ? event.status : "",
        }))}
        columns={[
          {
            field: "id",
            headerName: "ID",
            width: 70,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "titulo",
            headerName: "Titutlo",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (params) => `${params.row.name || ""}`,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "date",
            headerName: "Fecha",
            width: 130,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "time",
            headerName: "Hora",
            width: 130,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "location",
            headerName: "Lugar",
            width: 130,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "status",
            headerName: "Estado",
            width: 130,
            renderCell: (params) => (
              <div>
                {
                  // Si el estado es activo, muestra el texto en verde
                  params.value === "activo" ? (
                    <span className={"text-primary"}>Activo</span>
                  ) : (
                    // Si el estado es inactivo, muestra el texto en rojo
                    <span className={"text-error"}>Inactivo</span>
                  )
                }
              </div>
            ),
          },
          {
            field: "detail",
            headerName: "Detalles",
            width: 130,
            renderCell: (params) => (
              <button
                onClick={() => {
                  setSelectedEvent(params.row);
                  document.getElementById("my_modal_5").showModal();
                }}
                className={"btn btn-info btn-sm capitalize"}
              >
                Detalles
              </button>
            ),
          },
          {
            field: "update",
            headerName: "Actualizar",
            width: 130,
            renderCell: (params) => (
              <button
                onClick={() => {
                  navigate(`/admin/eventos/${params.row.id}`);
                }}
                className={"btn btn-secondary btn-sm capitalize"}
              >
                Actualizar
              </button>
            ),
          },
        ]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
