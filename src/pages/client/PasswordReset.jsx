import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await passwordReset(emailRef.current.value);
      if (!error) {
        setMsg("Password reset has been sent to your email");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {msg && (
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
            <span>Error! {msg}</span>
          </div>
        )}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <div className="form-control md:pt-16">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                ref={emailRef}
                required
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
                  Enviando...
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleSubmit}
                >
                  Enviar enlace de recuperación
                </button>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <div className="label-text-alt link link-hover">
                  <Link to={"/login"}>Volver al inicio de sesión.</Link>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
