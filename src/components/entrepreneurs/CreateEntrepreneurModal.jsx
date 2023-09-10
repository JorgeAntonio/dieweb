import {Box, Modal, TextField, Alert, AlertTitle} from "@mui/material";
import {useState} from "react";
import {useEntrepreneurContext} from "../../context/EntrepreneurContext.jsx";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#e4e9f1',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
};

export default function CreateEntrepreneurModal() {
    const {insertEntrepreneur} = useEntrepreneurContext();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [startup, setStartup] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setName("");
        setStartup("");
        setStatus("");
        setError(null)
    };

    function handleCreateEntrepreneur() {
        if (!name || !startup || !status) {
            setError("Error al crear el emprendedor: Debe ingresar todos los datos");
            return
        } else {
            setLoading(true);
            insertEntrepreneur(name, startup, status);
            handleClose();
        }
        setLoading(false)
    }

    setTimeout(() => {
        setError(null)
    }, 5000);


    return (
        <div>
            <button className={"btn btn-primary"} onClick={handleOpen}>Agregar Nuevo</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3 className="font-bold text-xl">Registrar Emprendedor</h3>
                    <p className="py-4"> Ingrese los datos del emprendedor </p>
                    {error && (
                        <Alert severity="error" mt={4} className={"my-4"}>
                            <AlertTitle>Error</AlertTitle>
                            <strong>{error}</strong>
                        </Alert>
                    )}
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
                                <button className={"btn btn-primary"} onClick={() => {
                                    handleCreateEntrepreneur();
                                }}>{loading ? (<span>Cargando</span>) : (<span>Crear</span>)}
                                </button>
                                <button className={"btn"} onClick={handleClose}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
