import { Alert, AlertTitle, Box, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEntrepreneurContext } from "../../context/EntrepreneurContext.jsx";

function RegisterEntrepreneurPage() {
  const navigate = useNavigate();
  const { insertEntrepreneur } = useEntrepreneurContext();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [startup, setStartup] = useState("");
  const [status, setStatus] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setName("");
    setStartup("");
    setStatus("");
    setError(null);
    setLoading(false);
    navigate("/admin/emprendedor");
  };

  function handleCreateEntrepreneur() {
    if (
      !name ||
      !startup ||
      !lastName ||
      !dni ||
      !email ||
      !phone ||
      !address
    ) {
      setError("Todos los campos son obligatorios");
      return;
    } else {
      setLoading(true);
      insertEntrepreneur(
        name,
        lastName,
        dni,
        email,
        phone,
        address,
        startup,
        status
      );
      navigate("/admin/emprendedor");
    }
    setLoading(false);
  }

  setTimeout(() => {
    setError(null);
  }, 5000);

  return (
    <div className={"h-full mx-auto p-4 md:p-16"}>
      {error && (
        <Alert severity="error" mt={3} className={"my-2 w-full"}>
          <AlertTitle>Error</AlertTitle>
          <strong>{error}</strong>
        </Alert>
      )}
      <div>
        <h3 className="font-bold text-xl">Registrar Emprendedor</h3>
        <p className="pt-2 pb-6"> Ingrese los datos del emprendedor </p>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
        <div className="">
          <Box component="form" noValidate autoComplete="off">
            <div className={"flex flex-col gap-4"}>
              <TextField
                required
                id="outlined-required"
                label="Nombre"
                placeholder={"Nombre"}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Apellido"
                placeholder={"Apellido"}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Dni"
                placeholder={"Dni"}
                onChange={(e) => setDni(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Box>
        </div>
        <div>
          <div className={"flex flex-col gap-4"}>
            <TextField
              required
              id="outlined-required"
              label="Telefono"
              placeholder={"Telefono"}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Dirección"
              placeholder={"Dirección"}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Startup"
              placeholder={"Startup"}
              onChange={(e) => setStartup(e.target.value)}
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Estado"
              defaultValue="Activo"
            />
          </div>
        </div>
      </div>
      <div className="modal-action">
        <form method="dialog">
          <div className={"flex gap-2"}>
            <button
              className={"btn btn-primary"}
              onClick={() => {
                handleCreateEntrepreneur();
              }}
            >
              {loading ? <span>Cargando</span> : <span>Guardar datos</span>}
            </button>
            <button className={"btn"} onClick={handleClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterEntrepreneurPage;
