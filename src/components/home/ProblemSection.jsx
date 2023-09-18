export default function ProblemSection() {
  return (
    <div>
      <div className="container mx-auto mt-8 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 text-balance">
          <h1 className="text-4xl font-sans text-start mb-4 uppercase">
            El Desafío de Emprender Sin Orientación
          </h1>

          <article className="list-disc list-inside text-balance">
            <p className="text-gray-800 text-lg mb-2">
              Iniciar un negocio sin una guía adecuada puede ser extremadamente
              difícil. Muchos emprendedores se enfrentan a obstáculos y desafíos
              que podrían haberse evitado con el apoyo adecuado y una dirección
              clara.
            </p>
            <p className="text-gray-800 text-lg mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              tempore necessitatibus facilis corrupti distinctio, similique
              exercitationem iusto dolor. Tenetur alias sed ab, recusandae minus
              placeat veniam eos amet! Aliquid, labore?
            </p>
          </article>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-man-playing-guitar-studio_23-2150232129.jpg?w=996&t=st=1694478062~exp=1694478662~hmac=e0d83580605127907ab3159167dd97913003d2792661ef7b2178a05569b0dd11"
            alt="Imagen de la empresa"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
