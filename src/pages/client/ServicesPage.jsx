import { useNavigate } from "react-router-dom";
import ServicesCard from "../../components/Services/ServicesCard";
import ClientNavbar from "../../layouts/components/ClientNavbar";
import Footer from "../../layouts/components/Footer";

const ServiciosPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/solicitar1");
  };

  return (
    <>
      <ClientNavbar />
      <div className="px-4 md:px-8 md:pb-16 pt-24">
        <h1 className="text-2xl md:text-3xl font-bold text-start md:text-start mb-4">
          Estructura de servicios
        </h1>

        <div className="flex flex-col gap-16">
          <ServicesCard
            title="1. Pre-incubación"
            requirement="Tener una idea de negocio."
            details="Validación de la idea de negocio: En esta etapa, se busca validar la idea de negocio y el modelo de negocio. Los emprendedores reciben asesoramiento y recursos para desarrollar un prototipo y validar su idea de negocio."
            last="3 meses"
            handleNavigate={() => {
              handleNavigate();
            }}
            isleftImage={true}
          />

          <ServicesCard
            title={"2. Incubación"}
            requirement={
              "Haber realizado el periodo de pre-incubación en esta incubadora o en otra incubadora."
            }
            details={
              "Desarrollo Empresarial: Durante la incubación, se enfoca en el desarrollo y crecimiento del proyecto. Los emprendedores reciben asesoramiento más profundo y recursos adicionales, como espacio de trabajo, acceso a financiamiento y conexiones con mentores e inversores."
            }
            last={"5 meses"}
            handleNavigate={() => {
              navigate("/solicitar2");
            }}
          />

          <ServicesCard
            title={"3. Post-incubación"}
            requirement={
              "Haber realizado el periodo de incubación en esta incubadora o en otra incubadora."
            }
            details={
              "Independencia y Crecimiento: En esta etapa, las startups incubadas se gradúan de la incubadora y funcionan de manera más independiente. Se espera que continúen creciendo, expandiéndose y consolidándose en el mercado."
            }
            last={"2 meses"}
            handleNavigate={() => {
              navigate("/solicitar3");
            }}
            isleftImage={true}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiciosPage;
