export const ContactSection = () => {
  return (
    <div className="container px-4 md:px-8 h-full mb-16">
      <h1 className="text-3xl font-semibold mb-16 text-center uppercase">
        ¿Tienes alguna duda?
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col justify-center gap-2">
          <p className="text-gray-500 text-center md:text-start">
            No dudes en contactarnos
          </p>
          <form className="flex flex-col gap-6 md:w-96">
            <input
              type="text"
              placeholder="Ingresa tu correo electrónico"
              className="w-full md:w-96 border border-gray-300 rounded-md p-2"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Escribe tu mensaje"
              className="w-full md:w-96 border border-gray-300 rounded-md p-2"
            />
            <button className="btn btn-primary">Enviar</button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-medium text-center md:text-start">
            Síguenos en nuestras redes sociales
          </h1>
          <div className="flex gap-4 my-8">
            <a href="https://www.facebook.com/">
              <img
                src="https://api.iconify.design/bi:facebook.svg"
                alt="facebook"
                className="w-8 md:w-16"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="https://api.iconify.design/bi:instagram.svg"
                alt="instagram"
                className="w-8 md:w-16"
              />
            </a>
            <a href="https://www.x.com/">
              <img
                src="https://api.iconify.design/bi:twitter.svg"
                alt="x"
                className="w-8 md:w-16"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src="https://api.iconify.design/bi:youtube.svg"
                alt="youtube"
                className="w-8 md:w-16"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
