const AboutSection = () => {
  return (
    <div className="container mx-auto mt-8 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://img.freepik.com/free-vector/team-work-concept-illustration_114360-2944.jpg?w=740&t=st=1694478271~exp=1694478871~hmac=a191afea5a5ef126b36ace4aca73e29847391853b8a88c6284cfd6de34421204"
          alt="Imagen de la empresa"
          className="rounded-lg shadow-lg h-[400px] w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-sans text-start mb-4">¿Quiénes somos?</h1>

        <article className="list-disc list-inside">
          <p className="text-gray-800 text-lg mb-2">
            La Dirección de Incubadora de Empresa (DIE) de la Universidad
            Nacional de la Amazonía Peruana es un programa de apoyo empresarial
            que busca fomentar la creación y consolidación de nuevos negocios en
            la región amazónica del Perú. Esta iniciativa se enmarca en el
            Vicerrectorado de Investigación de la universidad, que tiene como
            objetivo promover la investigación científica y tecnológica para el
            desarrollo sostenible de la región.
          </p>
          <p className="text-gray-800 text-lg mb-2">
            La DIE ofrece una serie de servicios y recursos para emprendedores y
            startups prometedoras, tales como asesoría técnica, capacitaciones,
            acceso a concursos de financiamiento y conexiones con redes de
            negocios y mentores.
          </p>
        </article>
      </div>
    </div>
  );
};

export default AboutSection;
