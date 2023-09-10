import { Alert, AlertTitle, Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEntrepreneurContext } from "../../context/EntrepreneurContext.jsx";
import { supabase } from "../../supabase/supabase.client.jsx";

function RegisterEntrepreneurPage() {
  const navigate = useNavigate();
  const { insertEntrepreneur } = useEntrepreneurContext();
  const [name, setName] = useState("");
  const [startup, setStartup] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setName("");
    setStartup("");
    setStatus("");
    setError(null);
  };

  function handleCreateEntrepreneur() {
    if (!name || !startup || !status) {
      setError("Error al crear el emprendedor: Debe ingresar todos los datos");
      return;
    } else {
      setLoading(true);
      insertEntrepreneur(name, startup, status);
      navigate("/admin/emprendedor");
    }
    setLoading(false);
  }

  setTimeout(() => {
    setError(null);
  }, 5000);

  const entrepreneurs = supabase
    .channel("custom-insert-channel")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "entrepreneurs" },
      (payload) => {
        console.log("Change received!", payload);
      }
    )
    .subscribe();

  useEffect(() => {
    entrepreneurs;
  }, [entrepreneurs]);

  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 gap-6 h-full mx-auto p-4 md:p-16 "
      }
    >
      <div className="">
        {error && (
          <Alert
            severity="warning"
            mt={3}
            className={"my-2 absolute max-w-[290px] md:max-w-2xl top-12 w-full"}
          >
            <AlertTitle>Error</AlertTitle>
            <strong>{error}</strong>
          </Alert>
        )}
        <h3 className="font-bold text-xl">Registrar Emprendedor</h3>
        <p className="py-4"> Ingrese los datos del emprendedor </p>

        <Box
          component="form"
          // sx={{
          //     '& .MuiTextField-root': {width: '50ch'},
          // }}
          noValidate
          autoComplete="off"
        >
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
              label="Startup"
              placeholder={"Startup"}
              onChange={(e) => setStartup(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Estado"
              placeholder={"Estado"}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </Box>
        <div className="modal-action">
          <form method="dialog">
            <div className={"flex gap-2"}>
              <button
                className={"btn btn-primary"}
                onClick={() => {
                  handleCreateEntrepreneur();
                }}
              >
                {loading ? <span>Cargando</span> : <span>Crear</span>}
              </button>
              <button className={"btn"} onClick={handleClose}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="h-[450px] bg-primary"></div>
      </div>
    </div>
  );
}

export default RegisterEntrepreneurPage;
