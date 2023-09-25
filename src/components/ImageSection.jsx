import PropTypes from "prop-types";

export const ImageSection = ({ children, isLeft, image }) => {
  return (
    <>
      {isLeft ? (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-screen">
          <div className="flex flex-col justify-center items-start p-4 md:p-8 gap-2 md:gap-4 max-w-3xl">
            {children}
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={image || "https://picsum.photos/500/500"}
              className="w-full h-[300px] md:h-full lg:h-[600px] object-cover"
              alt="Imagen de la incubadora"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="flex flex-col justify-center">
            <img
              src={image}
              className="md:h-full lg:h-[600px] w-full object-cover"
              alt="Imagen de la incubadora"
            />
          </div>
          <div className="flex flex-col justify-center items-end p-4 md:p-8 gap-2 md:gap-4 max-w-3xl">
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
