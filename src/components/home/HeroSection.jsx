import { Link } from "react-router-dom";
import background from "../../assets/images/hero.webp";

const Hero = () => {
  return (
    <div
      className="text-white h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-start p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          ¡Impulsa tu éxito con nosotros!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Descubre oportunidades ilimitadas para tu negocio.
        </p>
        <Link to="/accion" className="btn btn-primary btn-lg w-full sm:w-auto">
          Inscribete
        </Link>
      </div>
    </div>
  );
};

export default Hero;
