const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=360&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 360w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=740&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 740w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=826&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 826w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=900&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 900w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=996&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 996w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=1060&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 1060w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=1380&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 1380w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=1480&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 1480w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=1800&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 1800w, https://img.freepik.com/foto-gratis/concepto-negocio-equipo-cerca_23-2149151159.jpg?w=2000&t=st=1694719172~exp=1694719772~hmac=979f15a8194802803f3e2b8a77fe1b7e3966ff43178c4bf7764bd80ab70d6128 2000w"
          alt="Imagen de la empresa"
          className="rounded-lg shadow-lg h-[400px] w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-balance">
        <h1 className="text-4xl font-sans text-start mb-4 text-balance">
          ¿Quiénes somos?
        </h1>

        <article className="list-disc list-inside text-balance">
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
