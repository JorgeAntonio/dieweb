import { ImageSection } from "../ImageSection";

const AboutSection = () => {
  let data = [
    {
      title: "¿Quiénes somos?",
      content:
        "La Dirección de Incubadora de Empresa (DIE) de la Universidad Nacional de la Amazonía Peruana es un programa de apoyo empresarial que busca fomentar la creación y consolidación de nuevos negocios en la región amazónica del Perú. Esta iniciativa se enmarca en el Vicerrectorado de Investigación de la universidad, que tiene como objetivo promover la investigación científica y tecnológica para el desarrollo sostenible de la región.",
    },
    {
      title: "¿Qué hacemos?",
      content:
        "La DIE ofrece una serie de servicios y recursos para emprendedores y startups prometedoras, tales como asesoría técnica, capacitaciones, acceso a concursos de financiamiento y conexiones con redes de negocios y mentores.",
    },
    {
      title: "¿Cómo lo hacemos?",
      content:
        "Nuestro equipo de profesionales altamente calificados está preparado para proporcionarte orientación personalizada. Te ayudarán a superar desafíos, tomar decisiones fundamentadas y avanzar con confianza en tu trayectoria hacia el éxito empresarial.",
    },
  ];

  return (
    <div className="py-4 md:py-16">
      <h1 className="md:hidden text-3xl font-medium text-center uppercase pb-8">
        DIE UNAP
      </h1>
      <ImageSection
        image={
          "https://scontent.fiqt3-1.fna.fbcdn.net/v/t39.30808-6/348421177_987256862648803_4740172330324191767_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=813123&_nc_eui2=AeG2hHNeHgwJgW7JnmGqzpcdpCu61B04sLykK7rUHTiwvDzTgGRYzjGnFlwY0lAO3X7u4mSokwOTIcM4DJF174g8&_nc_ohc=ulhvjHaSKzkAX9GgCBZ&_nc_zt=23&_nc_ht=scontent.fiqt3-1.fna&oh=00_AfBRDOgfRcq8JT7lk8vCjT0HWjQ7SimtQY0mTMn3JH2Pzg&oe=65120AC5"
        }
      >
        <h1 className="hidden md:block text-3xl font-medium text-center uppercase">
          DIE UNAP
        </h1>
        <h2 className="text-xl font-medium text-start mb-8">
          La Dirección de Incubadora de Empresa (DIE){" "}
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          Es un programa de apoyo empresarial que busca fomentar la creación y
          consolidación de nuevos negocios en la región amazónica del Perú. Esta
          iniciativa se enmarca en el Vicerrectorado de Investigación de la
          Universidad Nacional de la Amazonía Peruana, que tiene como objetivo
          promover la investigación científica y tecnológica para el desarrollo
          sostenible de la región.
        </p>
        <br />
        <p className="text-sm md:text-base lg:text-xl">
          La DIE ofrece una serie de servicios y recursos para emprendedores y
          startups prometedoras, tales como asesoría técnica, capacitaciones,
          acceso a financiamiento y conexiones con redes de negocios y mentores.
        </p>
      </ImageSection>
    </div>

    // <div className="pb-16">
    //   <h1 className="text-3xl font-medium text-start mb-8 uppercase">
    //     DIE UNAP
    //   </h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    //     <div className="w-full">
    //       <img
    //         src="https://scontent.fiqt3-1.fna.fbcdn.net/v/t39.30808-6/348421177_987256862648803_4740172330324191767_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=813123&_nc_eui2=AeG2hHNeHgwJgW7JnmGqzpcdpCu61B04sLykK7rUHTiwvDzTgGRYzjGnFlwY0lAO3X7u4mSokwOTIcM4DJF174g8&_nc_ohc=ulhvjHaSKzkAX9GgCBZ&_nc_zt=23&_nc_ht=scontent.fiqt3-1.fna&oh=00_AfBRDOgfRcq8JT7lk8vCjT0HWjQ7SimtQY0mTMn3JH2Pzg&oe=65120AC5"
    //         alt="Imagen de la empresa"
    //         className="h-72 md:h-full lg:h-[600px] w-full object-cover"
    //       />
    //     </div>
    //     <div className="w-full">
    //       <h2 className="text-xl font-medium text-start mb-8">
    //         La Dirección de Incubadora de Empresa (DIE){" "}
    //       </h2>
    //       <p className="text-sm md:text-base lg:text-xl">
    //         Es un programa de apoyo empresarial que busca fomentar la creación y
    //         consolidación de nuevos negocios en la región amazónica del Perú.
    //         Esta iniciativa se enmarca en el Vicerrectorado de Investigación de
    //         la Universidad Nacional de la Amazonía Peruana, que tiene como
    //         objetivo promover la investigación científica y tecnológica para el
    //         desarrollo sostenible de la región.
    //       </p>
    //       <br />
    //       <p className="text-sm md:text-base lg:text-xl">
    //         La DIE ofrece una serie de servicios y recursos para emprendedores y
    //         startups prometedoras, tales como asesoría técnica, capacitaciones,
    //         acceso a financiamiento y conexiones con redes de negocios y
    //         mentores.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutSection;
