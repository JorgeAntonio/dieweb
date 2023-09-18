import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToastMessage from "../../components/ToastMessage";
import { useAuth } from "../../context/AuthProvider";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRef.current?.value || !emailRef.current?.value) {
      setErrorMsg("Por favor llena todos los campos");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Por favor llena todos los campos");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email o contraseña incorrectos");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="h-full md:h-screen grid grid-cols-1 md:grid-cols-5 px-2 py-10 md:py-0 md:px-0">
        <ToastMessage
          type="Error"
          show={errorMsg ? true : false}
          message={errorMsg}
          handleClose={() => setErrorMsg("")}
        />
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-start h-full">
            <img
              src="https://source.unsplash.com/random"
              alt="login"
              className="hidden md:flex md:w-full md:h-screen md:object-cover rounded"
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center md:items-center h-full">
            <div className="card flex-shrink-0 w-full max-w-sm bg-transparent">
              <div className="card-body">
                <h1 className="text-2xl md:text-3xl font-bold text-center md:text-start mb-4">
                  Bienvenido de nuevo
                </h1>
                <p className="text-start mb-4 text-balance text-sm">
                  Inicia sesión para continuar
                </p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Correo electronico</span>
                  </label>
                  <input
                    type="email"
                    placeholder="ejemplo@ejemplo.com"
                    className="input input-bordered"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contraseña</span>
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="input input-bordered"
                    ref={passwordRef}
                  />
                  <label className="label">
                    <div className="label-text-alt">
                      ¿Olvidaste tu contraseña?{" "}
                      <Link to={"/passwordreset"} className="link link-hover">
                        Recuperalo aquí.
                      </Link>
                    </div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  {loading ? (
                    <button className="btn btn-primary btn-block" disabled>
                      <svg
                        className="animate-spin inline-block mr-2 h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Validando...
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-block"
                      onClick={handleSubmit}
                    >
                      Iniciar sesión
                    </button>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <div className="label-text-alt">
                      ¿Todavia no eres usuario?{" "}
                      <Link to={"/register"} className="link link-hover">
                        Registrate aquí.
                      </Link>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
