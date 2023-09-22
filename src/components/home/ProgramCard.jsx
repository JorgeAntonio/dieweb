import PropTypes from "prop-types";

export const ProgramCard = ({ title, content, image }) => {
  return (
    <>
      <div className="border overflow-hidden">
        <figure>
          <img
            src={image || "https://picsum.photos/id/1005/400/250"}
            alt="Programa"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="p-2 md:p-4">
          <h2 className=" md:xl lg:text-2xl font-medium text-start mb-4">
            {title || "Programa de emprendimiento"}
          </h2>
          <p className="text-xs md:text-sm lg:text-base">
            {content ||
              "El programa de emprendimiento es un programa de 6 meses diseñado para ayudar a los emprendedores a desarrollar sus ideas de negocio. El programa está abierto a cualquier persona que tenga una idea de negocio y quiera convertirla en realidad."}
          </p>
        </div>
      </div>
    </>
  );
};

ProgramCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default ProgramCard;
