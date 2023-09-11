const AboutSection = () => {
  return (
    <div className="container mx-auto mt-8 bg-gray-100 p-8 md:p-16">
      <h1 className="text-4xl font-sans text-center mb-4">SOLUCIONES QUE BRINDA DIE</h1>

      <ul className="list-disc list-inside">
          <li className="text-gray-800 text-lg mb-2">
          Ayuda con el desarrollo de una estrategia empresarial solida incluyendo objetivos claros, metas alcanzables y un plan de acción detallado.
          </li>
          <li className="text-gray-800 text-lg mb-2">
          Ofrecemos asesoramiento financiero, ayudando a elaborar proyecciones financieras realistas, gestionar presupuestos y buscar fuentes de financiamiento adecuadas.
          </li>
          <li className="text-gray-800 text-lg mb-2">
          Brindamos orientacion en la creacion y mejora de productos o servicios, asi como en la gestion de la cadena de suministro.
          </li>
      </ul>
    </div>
  );
};

export default AboutSection;
