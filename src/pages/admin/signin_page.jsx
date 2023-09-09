import {Alert, AlertTitle, Box, TextField} from "@mui/material";
import {useState} from "react";
import background from "../../assets/images/hero.webp";
import {UserAuth} from "../../context/AuthContext.jsx";

export function SigInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, error} = UserAuth();
    const [loading, setLoading] = useState(false); // Agregar estado para el indicador de carga

    const handleLogin = async () => {
        setLoading(true); // Habilitar el indicador de carga
        await login({email, password});
        setLoading(false); // Deshabilitar el indicador de carga después de que se complete el inicio de sesión
    }

    return (
        <div>
            <div
                className="hero min-h-screen bg-base-200 md:p-16"
                style={{
                    backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ), url(${background})`,
                    backgroundBlendMode: "overlay",
                    backgroundSize: "cover",
                }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-balance">
                        <h1 className="text-2xl md:text-5xl font-bold">
                            ¡Bienvenido a DIE UNAP!
                        </h1>
                        <p className="md:text-xl font-medium py-6">
                            Proporcionando oportunidades y apoyando el espíritu empresarial
                            desde la Universidad Nacional de la Amazonia Peruana.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-white">
                        <div className="card-body w-[320px]">
                            <h1 className="text-3xl font-bold">Inicia sesión</h1>
                            <p className="mb-3">Ingresa tus datos para iniciar sesión.</p>
                            <div className="absolute w-[290px]">
                                {error && (
                                    <Alert severity="error" mt={4} className="w-[260px]">
                                        <AlertTitle>Error</AlertTitle>
                                        <strong>{error}</strong>
                                    </Alert>
                                )}
                            </div>
                            <Box noValidate autoComplete="off">
                                <div className="form-control mt-6">
                                    <TextField
                                        type="email"
                                        value={email}
                                        label="Correo"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email@email.com"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <TextField
                                        type="password"
                                        value={password}
                                        label="Contraseña"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="********"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleLogin}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span>Cargando</span>
                                        ) : (
                                            <span>Iniciar sesión</span>
                                        )}
                                    </button>
                                </div>
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover pt-4 text-center"
                                >
                                    ¿Has olvidado tu contraseña?
                                </a>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigInPage;
