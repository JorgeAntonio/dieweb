import ImageSection from "../../components/ImageSection";

const ServiciosPage = () => {
  return (
    <>
      <ImageSection
        isLeft={true}
        image={
          "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        }
      >
        <h1 className="text-3xl font-medium text-center md:text-start mb-8 mt-16 uppercase">
          Pre Incubación
        </h1>
        <p className="text-sm md:text-base lg:text-xl">
          La pre-incubación es la etapa inicial del proceso de incubación. En
          esta etapa, se busca validar la idea de negocio y el modelo de
          negocio. Los emprendedores reciben asesoramiento y recursos para
          desarrollar un prototipo y validar su idea de negocio.
        </p>
        <br />
        <p className="text-sm md:text-base lg:text-xl">
          Los emprendedores que deseen solicitar los servicios de la incubadora
          en esta etapa deben tener una idea de negocio y completar el
          formulario de solicitud de pre-incubación.
        </p>
      </ImageSection>
      <ImageSection
        isLeft={false}
        image={
          "https://images.unsplash.com/photo-1568658176307-bfbd2873abda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      >
        <h1 className="text-3xl font-medium text-center md:text-start mb-8 uppercase">
          Incubación
        </h1>
        <p className="text-sm md:text-base lg:text-xl">
          La incubación es la etapa de desarrollo y crecimiento del proyecto.
          Los emprendedores reciben asesoramiento más profundo y recursos
          adicionales, como espacio de trabajo, acceso a financiamiento y
          conexiones con mentores e inversores.
        </p>
        <br />
        <p className="text-sm md:text-base lg:text-xl">
          Los emprendedores que deseen solicitar los servicios de la incubadora
          en esta etapa deben haber realizado el periodo de pre-incubación en
          esta incubadora o en otra incubadora.
        </p>
      </ImageSection>

      <ImageSection
        isLeft={true}
        image={
          "https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      >
        <h1 className="text-3xl font-medium text-center md:text-start mb-8 uppercase">
          Post Incubación
        </h1>
        <p className="text-sm md:text-base lg:text-xl">
          La post-incubación es la etapa de independencia y crecimiento de la
          startup. En esta etapa, las startups incubadas se gradúan de la
          incubadora y funcionan de manera más independiente. Se espera que
          continúen creciendo, expandiéndose y consolidándose en el mercado.
        </p>
        <p className="text-sm md:text-base lg:text-xl">
          Los emprendedores que deseen solicitar los servicios de la incubadora
          en esta etapa deben haber realizado el periodo de incubación en esta
          incubadora o en otra incubadora.
        </p>
      </ImageSection>
    </>
  );
};

export default ServiciosPage;
