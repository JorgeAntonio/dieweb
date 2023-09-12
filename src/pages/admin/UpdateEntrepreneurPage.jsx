import {
  Alert,
  AlertTitle,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase/supabase.client.jsx";
function UpdateEntrepreneurPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [startup, setStartup] = useState("");
  const [status, setStatus] = useState("activo");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [entrepreneur, setEntrepreneur] = useState(null);
  const { id } = useParams();

  const handleClose = () => {
    navigate("/admin/emprendedor");
  };

  useEffect(() => {
    async function load() {
      try {
        const data = await readEntrepreneur(id);
        setEntrepreneur(data);
        setName(data.name);
        setLastName(data.lastname);
        setDni(data.dni);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
        setStartup(data.startup);
        setStatus(data.status);
      } catch (error) {
        console.log("Error al cargar el emprendedor: " + error.message);
        setError("Error al cargar el emprendedor: " + error.message);
      }
    }
    load();
  }, [id]);

  async function readEntrepreneur(id) {
    try {
      const { data, error } = await supabase
        .from("entrepreneurs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw new Error("Error al leer el emprendedor: " + error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.log("Error al leer el emprendedor: " + error.message);
      throw new Error("Error al leer el emprendedor: " + error.message);
    }
  }

  async function updateEntrepreneur() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("entrepreneurs")
        .update({
          name: name,
          lastname: lastName,
          dni: dni,
          email: email,
          phone: phone,
          address: address,
          startup: startup,
          status: status,
        })
        .eq("id", id)
        .single();
      if (error) {
        throw new Error("Error al actualizar el emprendedor: " + error.message);
      } else {
        navigate("/admin/emprendedor");
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log("Error al actualizar el emprendedor: " + error.message);
      throw new Error("Error al actualizar el emprendedor: " + error.message);
    }
  }

  async function deleteEntrepreneur() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("entrepreneurs")
        .delete()
        .eq("id", id);
      if (error) {
        throw new Error("Error al eliminar el emprendedor: " + error.message);
      } else {
        navigate("/admin/emprendedor");
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log("Error al eliminar el emprendedor: " + error.message);
      throw new Error("Error al eliminar el emprendedor: " + error.message);
    }
  }

  if (entrepreneur === null) {
    return <div>Cargando...</div>;
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
          Actualizar los datos del emprendedor {id}
        </h3>
        <p className="pt-2 pb-6">
          Modifique los datos que desea actualizar del emprendedor
        </p>
      </div>
      <div className={"flex gap-2 pb-6"}>
        <div className="form-control">
          <button
            className="btn btn-primary"
            onClick={updateEntrepreneur}
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
                required
                id="outlined-required"
                label="Nombre"
                placeholder={"Nombre"}
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Apellido"
                placeholder={"Apellido"}
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  className="w-[300px]"
                  required
                  id="outlined-required"
                  label="Dni"
                  placeholder={"Dni"}
                  defaultValue={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Email"
                  placeholder={"Email"}
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  className="w-[300px]"
                  required
                  id="outlined-required"
                  label="Telefono"
                  placeholder={"Telefono"}
                  defaultValue={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Dirección"
                  placeholder={"Dirección"}
                  defaultValue={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <TextField
                required
                id="outlined-required"
                label="Startup"
                placeholder={"Startup"}
                defaultValue={startup}
                onChange={(e) => setStartup(e.target.value)}
              />
              <FormControl fullWidth>
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
              </FormControl>
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
          <h3 className="font-bold text-lg">Eliminar emprendedor</h3>
          <p className="py-4">
            Esta seguro que desea eliminar el emprendedor{" "}
            <strong>{name}</strong>?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-2" onClick={deleteEntrepreneur}>
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

export default UpdateEntrepreneurPage;
