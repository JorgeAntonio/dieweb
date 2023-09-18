import Proptypes from "prop-types";

export const ServicesCard = ({
  handleNavigate,
  title,
  requirement,
  details,
  last,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-lg rounded-xl">
      <div className="flex flex-col justify-center items-start p-8 gap-4">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Requisito</h2>
        <p>{requirement}</p>
        <h2 className="card-title">
          A grandes rasgos lo que se busca alcanzar en esta etapa:
        </h2>
        <p className="text-balance">{details}</p>
        <div>
          <h2 className="card-title">Tiempo</h2>
          <p>{last}</p>
        </div>
        <div className="card-actions justify-start">
          <button onClick={handleNavigate} className="btn btn-primary">
            Inscribirme
          </button>
        </div>
      </div>
      <div className="hidden md:h-full md:flex md:flex-col">
        <img
          src="https://source.unsplash.com/random"
          className="md:h-full lg:h-[500px] object-cover md:rounded-tr-xl md:rounded-br-xl md:rounded-l-none"
          alt="Imagen de la incubadora"
        />
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  handleNavigate: Proptypes.func,
  title: Proptypes.string,
  requirement: Proptypes.string,
  details: Proptypes.string,
  last: Proptypes.string,
};

export default ServicesCard;
