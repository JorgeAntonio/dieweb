export default function MisionSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-16">
        <div>
          <div className="card bg-white w-full text-balance">
            <div className="card-body">
              <h1 className="card-title">Misión</h1>
              <div className="card-contend">
                <p>
                  Proporcionar las herramientas y recursos necesarios para el
                  éxito de nuestros participantes. Ofrecemos mentores y expertos
                  experimentados en áreas clave, capacitación y espacios de
                  trabajo compartidos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-white w-full">
            <div className="card-body">
              <h1 className="card-title">Visión</h1>
              <div className="card-contend">
                <p>
                  Ser el principal programa de apoyo empresarial de la región,
                  reconocido por su capacidad para convertir a los emprendedores
                  y startups en líderes del mercado mediante el suministro de
                  las herramientas necesarias para su éxito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
