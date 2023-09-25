import { Link } from "react-router-dom";
import background from "../../assets/images/background.webp";

export const MainHero = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-3 justify-center items-center px-4 md:pl-8 md:pr-0 pt-16 h-screen text-white"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="col-span-2 max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-start my-6">
            Programas de Incubación:
            <br /> Desde la Idea hasta el Éxito Empresarial
          </h1>
          <p className="text-sm md:text-base lg:text-xl mb-8">
            La incubadora de negocios de la Universidad Nacional de la Amazonia
            Peruana ofrece servicios de pre-incubación, incubación y
            post-incubación a emprendedores que deseen desarrollar sus ideas de
            negocio y convertirlas en startups. Los servicios de la incubadora
            se ofrecen en tres etapas diferentes, cada una con una duración de
            tres meses. Los emprendedores pueden solicitar los servicios de la
            incubadora en cualquiera de las tres etapas, dependiendo de su nivel
            de desarrollo.
          </p>
          <Link
            to="/accion"
            className="btn btn-primary btn-lg w-full sm:w-auto"
          >
            Inscribete
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainHero;
