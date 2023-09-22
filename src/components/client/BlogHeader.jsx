export const BlogHeader = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center px-4 md:pl-8 md:pr-0 pt-16 h-full">
        <div className="col-span-2 max-w-4xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center md:text-start my-6">
            Explorando el Éxito Empresarial:
            <br />
            Inspiración y Orientación para Emprendedores.
          </h1>
          <p className="text-lg md:text-xl text-center md:text-start">
            Un blog dedicado a tu éxito empresarial, donde encontrarás
            información relevante para tu negocio. En este blog encontrarás
            artículos sobre temas de emprendimiento, marketing, ventas,
            finanzas, liderazgo y más.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-photo/male-graphic-designer-giving-high-five-his-coworker_1170-1093.jpg?w=1060&t=st=1695102091~exp=1695102691~hmac=9ac473ee477ef391cee492ef8bc6617eda711c73d5b0f1b88c587e140708aa58"
          className="hidden sm:block h-full object-cover"
          alt="blog"
        />
      </div>
    </>
  );
};
