import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { supabase } from "../../supabase/supabase.client.jsx";

function CreateEventModal() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    image: "",
    link: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function createEvent() {
    try {
      const { data, error } = await supabase.from("events").insert([
        {
          title: formData.title,
          description: formData.description,
          date: formData.date,
          time: formData.time,
          location: formData.location,
          image: formData.image,
          link: formData.link,
          status: formData.status,
        },
      ]);
      if (error) {
        throw error;
      }
      if (data) {
        alert("Evento creado correctamente");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones necesarias
    createEvent();
    console.log(formData);
    closeModalHandler(); // Cierra el modal después de enviar el formulario
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.showModal();
  };

  const closeModalHandler = () => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
  };

  return (
    <div>
      <div className="flex justify-between pb-8">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <button className={"btn btn-primary"} onClick={openModal}>
          Crear Evento
        </button>
      </div>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Crear Evento</h3>
          <p className="pt-4">Presiona ESC o el botón de abajo para cerrar</p>
          <div className="modal-action">
            <form
              onSubmit={handleSubmit}
              className={"flex flex-col w-full gap-2"}
            >
              <TextField
                required
                id="title"
                name="title"
                label="Título"
                variant="outlined"
                fullWidth
                value={formData.title}
                onChange={handleChange}
              />
              <TextField
                required
                id="description"
                name="description"
                label="Descripción"
                variant="outlined"
                fullWidth
                value={formData.description}
                onChange={handleChange}
              />
              <TextField
                required
                id="date"
                name="date"
                label="Fecha"
                variant="outlined"
                fullWidth
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.date}
                onChange={handleChange}
              />
              <TextField
                required
                id="time"
                name="time"
                label="Hora"
                variant="outlined"
                fullWidth
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.time}
                onChange={handleChange}
              />
              <TextField
                required
                id="location"
                name="location"
                label="Lugar"
                variant="outlined"
                fullWidth
                value={formData.location}
                onChange={handleChange}
              />
              <TextField
                required
                id="image"
                name="image"
                label="Imagen"
                variant="outlined"
                fullWidth
                value={formData.image}
                onChange={handleChange}
              />
              <TextField
                required
                id="link"
                name="link"
                label="Enlace"
                variant="outlined"
                fullWidth
                value={formData.link}
                onChange={handleChange}
              />
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={formData.status}
                label="Estado"
                onChange={(e) => {
                  setFormData({ ...formData, status: e.target.value });
                }}
              >
                <MenuItem value={"activo"}>Activo</MenuItem>
                <MenuItem value={"inactivo"}>Inactivo</MenuItem>
              </Select>
              <div className={"flex gap-3"}>
                <button className="btn btn-primary" type="submit">
                  Agregar
                </button>
                <button className="btn btn-danger" onClick={closeModalHandler}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CreateEventModal;
