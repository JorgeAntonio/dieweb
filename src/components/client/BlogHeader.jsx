export const BlogHeader = () => {
  return (
    <>
      <div className="px-4 md:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center h-96">
          <div className="col-span-2">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center md:text-start mb-6">
              Explorando el Éxito Empresarial: Inspiración y Orientación para
              Emprendedores.
            </h1>
            <p className="text-lg md:text-xl text-center md:text-start pb-4">
              Un blog dedicado a tu éxito empresarial.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-photo/male-graphic-designer-giving-high-five-his-coworker_1170-1093.jpg?w=1060&t=st=1695102091~exp=1695102691~hmac=9ac473ee477ef391cee492ef8bc6617eda711c73d5b0f1b88c587e140708aa58"
            className="hidden sm:block md:h-80 object-cover rounded-xl"
            alt="portada blog"
          />
        </div>
      </div>
    </>
  );
};
