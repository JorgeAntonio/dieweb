import React from 'react';

const ServiciosLayout = () => {
  return (
    <div className="w-full md:w-1/2 text-balance">
      <div className="mb-4">
        <h1 className="text-4xl font-sans text-start mb-4 text-balance">Estructura de Servicios</h1>
      </div>

      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-4xl font-sans text-start mb-4 text-balance">1. Pre-incubación</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Requisito:</h3>
          <p>Tener una idea de negocio innovadora</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">A grandes rasgos lo que se busca alcanzar en esta etapa:</h3>
          <p>
            Capacitación y Asesoría Inicial: En esta etapa, se brinda capacitación y asesoría básica para ayudar a los emprendedores a validar sus ideas y preparar sus proyectos para la incubación. Esto puede incluir talleres sobre desarrollo de modelos de negocio, investigación de mercado, presentación de proyectos, etc.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Tiempo:</h3>
          <p>3 meses</p>
        </div>
        <div className="mb-4 flex items-center"> {/* Utilizamos flex para alinear el botón a la izquierda */}
          <button className="btn btn-primary">
            Inscribirme
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-4xl font-sans text-start mb-4 text-balance">2. Incubación</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Requisito:</h3>
          <p>Haber realizado el periodo de pre-incubación en esta incubadora o en otra incubadora.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">A grandes rasgos lo que se busca alcanzar en esta etapa:</h3>
          <p>
            Desarrollo Empresarial: Durante la incubación, se enfoca en el desarrollo y crecimiento del proyecto. Los emprendedores reciben asesoramiento más profundo y recursos adicionales, como espacio de trabajo, acceso a financiamiento y conexiones con mentores e inversores.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Tiempo:</h3>
          <p>5 meses</p>
        </div>
        <div className="mb-4 flex items-center"> {/* Utilizamos flex para alinear el botón a la izquierda */}
          <button className="btn btn-primary">
            Inscribirme
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-4xl font-sans text-start mb-4 text-balance">3. Post-incubación</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Requisito:</h3>
          <p>Haber realizado el periodo de pre-incubación en esta incubadora o en otra incubadora.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">A grandes rasgos lo que se busca alcanzar en esta etapa:</h3>
          <p>
            Independencia y Crecimiento: En esta etapa, las startups incubadas se gradúan de la incubadora y funcionan de manera más independiente. Se espera que continúen creciendo, expandiéndose y consolidándose en el mercado.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Tiempo:</h3>
          <p>2 meses</p>
        </div>
        <div className="mb-4 flex items-center"> {/* Utilizamos flex para alinear el botón a la izquierda */}
          <button className="btn btn-primary">
            Inscribirme
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiciosLayout;
