import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-2xl text-balance">
        La página que estás buscando no existe o no se encuentra disponible.
      </p>
      <p className="text-lg mt-6">Por favor, regresa a la página principal.</p>
      <Link to="/" className="btn btn-primary mt-6">
        Regresar a la página principal
      </Link>
    </div>
  );
}
