import PropTypes from "prop-types";

export const MainSection = ({ children }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center w-full h-full md:h-screen px-4 pt-8 md:pt-0 md:px-8"
      }
    >
      {children}
    </div>
  );
};

MainSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainSection;
