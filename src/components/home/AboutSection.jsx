import {ImageSection} from "../ImageSection";

const AboutSection = () => {
    return (
            <ImageSection
                isLeft={true}

                image={
                    "https://scontent.fiqt3-1.fna.fbcdn.net/v/t39.30808-6/348421177_987256862648803_4740172330324191767_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=813123&_nc_eui2=AeG2hHNeHgwJgW7JnmGqzpcdpCu61B04sLykK7rUHTiwvDzTgGRYzjGnFlwY0lAO3X7u4mSokwOTIcM4DJF174g8&_nc_ohc=ulhvjHaSKzkAX9GgCBZ&_nc_zt=23&_nc_ht=scontent.fiqt3-1.fna&oh=00_AfBRDOgfRcq8JT7lk8vCjT0HWjQ7SimtQY0mTMn3JH2Pzg&oe=65120AC5"
                }
            >
                <h1 className="hidden md:block text-3xl font-medium text-center uppercase">
                    DIE UNAP
                </h1>
                <h2 className="text-xl font-medium text-start mb-8">
                    La Dirección de Incubadora de Empresa (DIE){" "}
                </h2>
                <p className="text-sm md:text-base lg:text-xl">
                    Es un programa de apoyo empresarial que busca fomentar la creación y
                    consolidación de nuevos negocios en la región amazónica del Perú. Esta
                    iniciativa se enmarca en el Vicerrectorado de Investigación de la
                    Universidad Nacional de la Amazonía Peruana, que tiene como objetivo
                    promover la investigación científica y tecnológica para el desarrollo
                    sostenible de la región.
                </p>
                <br/>
                <p className="text-sm md:text-base lg:text-xl">
                    La DIE ofrece una serie de servicios y recursos para emprendedores y
                    startups prometedoras, tales como asesoría técnica, capacitaciones,
                    acceso a financiamiento y conexiones con redes de negocios y mentores.
                </p>
            </ImageSection>
    );
};

export default AboutSection;
