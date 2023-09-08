import PropTypes from "prop-types";

const CasesCard = ({ title, description, image }) => {
  return (
    <div className="card card-compact bg-white shadow-2xl hover:opacity-80 hover:shadow-md">
      <figure>
        <img src={image} alt="Shoes" className="h-[220px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

CasesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CasesCard;
