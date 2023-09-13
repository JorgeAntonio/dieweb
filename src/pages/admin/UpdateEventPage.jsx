import {
  Alert,
  AlertTitle,
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase/supabase.client.jsx";

function UpdateEventPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("activo");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  const handleClose = () => {
    navigate("/admin/eventos");
  };

  useEffect(() => {
    async function load() {
      try {
        const data = await readEvent(id);
        setEvent(data);
        setTitle(data.title);
        setDescription(data.description);
        setDate(data.date);
        setTime(data.time);
        setLocation(data.location);
        setImage(data.image);
        setLink(data.link);
        setStatus(data.status);
      } catch (error) {
        console.log("Error al cargar el evento: " + error.message);
        setError("Error al cargar el evento: " + error.message);
      }
    }
    load();
  }, [id]);

  async function readEvent(id) {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw new Error("Error al leer el evento: " + error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.log("Error al leer el evento: " + error.message);
      throw new Error("Error al leer el evento: " + error.message);
    }
  }

  async function updateEvent() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .update({
          title: title,
          description: description,
          date: date,
          time: time,
          location: location,
          image: image,
          link: link,
          status: status,
        })
        .eq("id", id)
        .single();
      if (error) {
        throw new Error("Error al actualizar el evento: " + error.message);
      } else {
        navigate("/admin/eventos");
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log("Error al actualizar el evento: " + error.message);
      throw new Error("Error al actualizar el evento: " + error.message);
    }
  }

  async function deleteEvent() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .delete()
        .eq("id", id);
      if (error) {
        throw new Error("Error al eliminar el evento: " + error.message);
      } else {
        navigate("/admin/eventos");
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log("Error al eliminar el evento: " + error.message);
      throw new Error("Error al eliminar el evento: " + error.message);
    }
  }

  if (event === null) {
    return (
      <div>
        <div className="h-screen w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className={"h-full mx-auto p-4 md:p-16"}>
      {error && (
        <Alert severity="error" mt={3} className={"my-2 w-full"}>
          <AlertTitle>Error</AlertTitle>
          <strong>{error}</strong>
        </Alert>
      )}
      <div>
        <h3 className="font-bold text-xl">
          Actualizar los datos del evento {title}
        </h3>
        <p className="pt-2 pb-6">
          Modifique los datos que desea actualizar del evento
        </p>
      </div>
      <div className={"flex gap-2 pb-6"}>
        <div className="form-control">
          <button
            className="btn btn-primary"
            onClick={updateEvent}
            disabled={loading}
          >
            {loading ? <span>Cargando</span> : <span>Actualizar datos</span>}
          </button>
        </div>
        <button className={"btn"} onClick={handleClose}>
          Cancelar
        </button>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-8">
        <div className="container mx-auto">
          <Box component="form" noValidate autoComplete="off">
            <div className={"flex flex-col gap-4"}>
              <TextField
                requiredca
                id="outlined-required"
                label="Titulo"
                placeholder={"Titulo"}
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Descripción"
                placeholder={"Descripción"}
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  className="w-[300px]"
                  required
                  id="outlined-required"
                  label="Fecha"
                  type="date"
                  placeholder={"Fecha"}
                  defaultValue={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Hora"
                  placeholder={"Hora"}
                  type="time"
                  defaultValue={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  className="w-[300px]"
                  required
                  id="outlined-required"
                  label="Lugar"
                  placeholder={"Lugar"}
                  defaultValue={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Dirección"
                  placeholder={"Dirección"}
                  defaultValue={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <TextField
                required
                id="outlined-required"
                label="Enlace"
                placeholder={"Enlace"}
                defaultValue={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={status}
                label="Estado"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={"activo"}>Activo</MenuItem>
                <MenuItem value={"inactivo"}>Inactivo</MenuItem>
              </Select>
            </div>
          </Box>
        </div>
        <div>
          <img
            src="https://picsum.photos/526/416"
            alt="card"
            className="w-full md:h-[416px] object-cover hidden md:block"
          />
        </div>
      </div>
      <div className="py-8 max-w-lg">
        <h3 className="font-bold text-xl">Opciones avanzados</h3>
        <div className="form-control mt-6">
          <button
            className="btn btn-error"
            onClick={() => document.getElementById("my_modal_5").showModal()}
            disabled={loading}
          >
            {loading ? (
              <span>Cargando</span>
            ) : (
              <span>Borrar definitivamente</span>
            )}
          </button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Eliminar evento</h3>
          <p className="py-4">
            Esta seguro que desea eliminar el evento <strong>{title}</strong>?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-2" onClick={deleteEvent}>
                Confirmar
              </button>
              <button className="btn btn-primary">Cancelar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default UpdateEventPage;
