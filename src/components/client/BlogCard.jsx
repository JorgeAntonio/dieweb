import PropTypes from "prop-types";

export const BlogCard = ({ image, title, date }) => {
  return (
    <div className="card-compact rounded-xl bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          className="w-full h-[220px] object-cover rounded-t-xl"
          alt="post image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{date}</p>
        <p>Leer más para leer el articulo completo </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Leer más</button>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default BlogCard;
