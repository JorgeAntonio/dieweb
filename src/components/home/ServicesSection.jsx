import { ProgramCard } from "./ProgramCard";

const ServicesSection = () => {
  return (
    <section className="py-4 md:py-16 px-4 md:px-8 h-full">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold my-16 text-center uppercase">
          Recursos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProgramCard
            title={"Guía empresarial"}
            content={
              "Programas diseñados para acompañarte en cada paso. Desde la concepción de tu idea hasta la ejecución y el crecimiento de tu negocio."
            }
            image={
              "https://scontent.fiqt3-1.fna.fbcdn.net/v/t39.30808-6/334979594_179116981531091_6826592852775266770_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=813123&_nc_eui2=AeGTdd1WKsVyFm1JXvzJf4rVHlD4pZtZWAIeUPilm1lYAixDLxIdREwjxS6va4HYxcvseJ_kqSdxHbo2sWMZ59hy&_nc_ohc=lxB-6UnjDrQAX-OaWOO&_nc_zt=23&_nc_ht=scontent.fiqt3-1.fna&oh=00_AfBXUQK2tWfPy41Oh8zQuxC7KGZ0LogRIJJcnNMkQfXVYA&oe=651102AC"
            }
          />
          <ProgramCard
            title={"Mentoría personalizada"}
            content={
              "Mentores y expertos altamente experimentados preparados para proporcionarte orientación personalizada. Te ayudarán a superar desafíos, tomar decisiones fundamentadas y avanzar con confianza en tu trayectoria hacia el éxito empresarial."
            }
            image={
              "https://scontent.fiqt3-1.fna.fbcdn.net/v/t39.30808-6/347658221_266249869113028_4469603379540778343_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=813123&_nc_eui2=AeHkNcVYgnEgZP7VjUKbIixUgg_M7u3hBDOCD8zu7eEEM0GNVQvAzoEkNXbYmpZZL4XcrcHGIw2CHLRG49orqQA2&_nc_ohc=xL8NSyr8m1wAX8JUqBs&_nc_zt=23&_nc_ht=scontent.fiqt3-1.fna&oh=00_AfBQIWC5-g85HxHIUBlmG9HZz2C-L__9LFRynGjo5h_K7g&oe=65112766"
            }
          />
          <ProgramCard
            title={"Explora servicios clave"}
            content={
              "Capacitación especializada, acceso a recursos y espacios de trabajo colaborativos diseñados para proporcionarte las herramientas necesarias que te permitan superar los obstáculos iniciales en el mundo del emprendimiento."
            }
            image={
              "https://scontent.fiqt3-1.fna.fbcdn.net/v/t39.30808-6/330353991_604312327965218_5113270765573853013_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=813123&_nc_eui2=AeGLP1225k6bbKeBDln8zbgpI0SfiVq0vZcjRJ-JWrS9l8q0xfKVEDCKzDJtu7vkvqhrTBJ1H5GKSXzl2qnvN7_L&_nc_ohc=UMMqJ4g7nWkAX_gXoDY&_nc_zt=23&_nc_ht=scontent.fiqt3-1.fna&oh=00_AfCSyxfetLkITWcENAsW220IElHyFSJyj-PMoa_IuXZWPw&oe=65127778"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
