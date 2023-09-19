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
        <h1 className="text-2xl md:text-3xl font-bold text-start md:text-start mb-6">
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
            image={
              "https://img.freepik.com/free-photo/young-pretty-tailors-happily-looking-camera-drawing-sketches-new-clothes-together-cozy-sewing-workshop_574295-3698.jpg?w=1060&t=st=1695097126~exp=1695097726~hmac=a0df97d6d5a706d440dbf81aecf2f55b0d56263fdfb32748f5323e14abfc09e3"
            }
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
            image={
              "https://img.freepik.com/free-photo/young-professional-carpenter-holding-wood-material-looking-tablet-carpentry-workshop_342744-843.jpg?w=1060&t=st=1695097193~exp=1695097793~hmac=3e359e0570f1bd102f82b8938bc42ecf1f2f7446cb15ce3e5b294f6e9b8e445d"
            }
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
            image={
              "https://img.freepik.com/free-photo/asia-female-ceramist-with-apron-hand-confident-chest-her-workshop-clay-sculpture-studio-with-positive-smiling-warm-welcome-ready-start-new-factory-ceramic-workshop-with-new-collection-work_609648-2716.jpg?w=1060&t=st=1695096773~exp=1695097373~hmac=d309e34189d4df6f5a0dda3e31223528ec6c2daa06734c6cefaf8442c93c73ce"
            }
            isleftImage={true}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiciosPage;
