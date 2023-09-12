const TalentSection = () => {
  return (
    <div className="container mx-auto mt-8 p-8 md:p-16 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://img.freepik.com/free-photo/medium-shot-man-playing-guitar-studio_23-2150232129.jpg?w=996&t=st=1694478062~exp=1694478662~hmac=e0d83580605127907ab3159167dd97913003d2792661ef7b2178a05569b0dd11" // Reemplaza 'tu_imagen.jpg' con la URL o ruta de tu imagen
          alt="Imagen de talento"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-sans text-center mb-4">¿PROBLEMAS?</h1>
        <p className="text-gray-800 text-lg mb-2 text-center">
          Apoyamos a los estudiantes que no tienen una ruta concreta para seguir
          para concretizar sus ideas de negocios.
        </p>
      </div>
    </div>
  );
};

export default TalentSection;
