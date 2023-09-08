import { Alert, AlertTitle, Box, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/hero.webp";
import { supabase } from "../../supabaseClient";

const SigInPage = () => {
  // Definir estados para el correo electrónico y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const redirect = useNavigate();

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      // Validar que los campos no estén vacíos
      if (!email || !password) {
        setError("Correo y contraseña son obligatorios");
        setTimeout(() => {
          setError(false);
        }, 1200);

        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // El usuario se ha autenticado correctamente
      console.log("Usuario autenticado:", data.user);
      // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión
      redirect("/dashboard", { replace: true });
    } catch (error) {
      if (error.message === "Invalid login credentials") {
        error.message =
          "Credenciales inválidas. Por favor, intenta nuevamente.";
      }
      console.error("Error al iniciar sesión:", error.message);
      // Establecer el mensaje de error en el estado
      setError(error.message);

      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200 md:p-16"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${background})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-5xl font-bold">
              ¡Bienvenido a DIE UNAP!
            </h1>
            <p className="md:text-xl font-medium py-6">
              Proporcionando oportunidades y apoyando el espíritu empresarial
              desde la Universidad Nacional de la Amazonia Peruana.
            </p>
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body w-[320px]">
              <h1 className="text-3xl font-bold">Inicia sesión</h1>
              <p className="mb-3">Ingresa tus datos para iniciar sesión.</p>
              <div className="absolute w-[290px]">
                {error && (
                  <Alert severity="error" mt={4} className="">
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
                  <button className="btn btn-primary" onClick={handleLogin}>
                    Iniciar sesión
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
  );
};

export default SigInPage;
