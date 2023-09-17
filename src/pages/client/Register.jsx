import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/supabase.client";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
      if (error) {
        setErrorMsg(`${error.message}`);
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {errorMsg && (
              <div className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! {errorMsg}</span>
              </div>
            )}

            {msg && (
              <div className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{msg}</span>
              </div>
            )}
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Correo electronico</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
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
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  ref={passwordRef}
                />
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
                    Registrate
                  </button>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <div className="label-text-alt">
                    ¿Ya eres usuario?{" "}
                    <Link to={"/login"} className="link link-hover">
                      Iniciar sesión.
                    </Link>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
