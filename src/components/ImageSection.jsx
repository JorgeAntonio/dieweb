import PropTypes from "prop-types";

export const ImageSection = ({ children, isLeft, image }) => {
  return (
    <>
      {isLeft ? (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-start p-4 md:p-8 gap-4">
            {children}
          </div>
          <div className="md:h-full md:flex md:flex-col">
            <img
              src={image}
              className="md:h-full lg:h-[600px] object-cover"
              alt="Imagen de la incubadora"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:h-full md:flex md:flex-col">
            <img
              src={image}
              className="md:h-full lg:h-[600px] object-cover"
              alt="Imagen de la incubadora"
            />
          </div>
          <div className="flex flex-col justify-center items-start p-4 md:p-8 gap-4">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

ImageSection.propTypes = {
  children: PropTypes.node,
  isLeft: PropTypes.bool,
  image: PropTypes.string,
};

export default ImageSection;
