export const ServicesHeaderSection = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-3 justify-center items-center px-4 md:pl-8 md:pr-0 pt-16 h-screen text-base-200 "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="col-span-2 max-w-4xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center md:text-start my-6">
            Nuestros Programas de Incubación:
            <br /> Desde la Idea hasta el Éxito Empresarial
          </h1>
          <p className="text-sm md:text-base lg:text-xl">
            La incubadora de negocios de la Universidad Nacional de la Amazonia
            Peruana ofrece servicios de pre-incubación, incubación y
            post-incubación a emprendedores que deseen desarrollar sus ideas de
            negocio y convertirlas en startups. Los servicios de la incubadora
            se ofrecen en tres etapas diferentes, cada una con una duración de
            tres meses. Los emprendedores pueden solicitar los servicios de la
            incubadora en cualquiera de las tres etapas, dependiendo de su nivel
            de desarrollo.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesHeaderSection;
