import PropTypes from "prop-types";

const CasesCard = ({ title, description }) => {
  return (
    <div className="card max-w-sm min-w-full bg-base-100 shadow-xl hover:opacity-90 hover:ease-in-out hover:shadow-2xl hover:cursor-pointer">
      <figure>
        <img src="https://picsum.photos/id/200/600/350" alt="" />
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
};

export default CasesCard;
