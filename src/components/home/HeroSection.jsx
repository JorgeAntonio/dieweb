import { Link } from "react-router-dom";
import background from "../../assets/images/hero.webp";
import HeroNavbar from "../../layouts/components/HeroNavbar";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
        <HeroNavbar />
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              ¡TRAZA TU FUTURO AHORA!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              YA ESTÁS EN EL CAMINO DEL ÉXITO. HAREMOS QUE TUS IDEAS BRILLEN AÚN
              MÁS.
            </p>
            <Link to={`solicitar`} className="btn btn-primary text-lg">
              Unete ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
