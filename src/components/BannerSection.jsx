import PropTypes from "prop-types";

export const BannerSection = ({ children }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center w-full h-full md:h-screen px-4 pt-8 md:pt-0 md:pl-8 md:pr-0"
      }
    >
      {children}
    </div>
  );
};

BannerSection.propTypes = {
  children: PropTypes.node,
};

export default BannerSection;
