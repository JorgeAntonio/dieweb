const ServicesSection = () => {
  return (
    <div className="container mx-auto mt-8 bg-base-300 p-8 md:p-16 text-balance">
      <h1 className="text-4xl font-sans text-center mb-4">
        Nuestros Servicios
      </h1>

      <div className="text-gray-800 text-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">Programas de Ayuda</h2>
        <p>
          Ofrecemos programas diseñados para guiar a emprendedores en cada paso
          del camino. Desde la concepción de la idea hasta la implementación y
          el crecimiento del negocio, estamos aquí para apoyarte.
        </p>
      </div>

      <div className="text-gray-800 text-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">Mentoría Especializada</h2>
        <p>
          Nuestros mentores y expertos experimentados están listos para
          proporcionarte orientación personalizada. Te ayudarán a superar
          desafíos, tomar decisiones informadas y avanzar en tu camino hacia el
          éxito empresarial.
        </p>
      </div>

      <div className="text-gray-800 text-lg">
        <h2 className="text-2xl font-semibold mb-2">Servicios Clave</h2>
        <p>
          Además, ofrecemos una variedad de servicios clave, que incluyen
          capacitación especializada, acceso a recursos de financiamiento y
          espacios de trabajo colaborativos. Estos recursos están diseñados para
          brindarte las herramientas necesarias para superar los obstáculos
          iniciales en el mundo del emprendimiento.
        </p>
      </div>
      <div className="pt-8">
        <button className="btn btn-primary">UNETE A NOSOTROS AHORA</button>
      </div>
    </div>
  );
};

export default ServicesSection;
