import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const BlogCard = ({ id, image, title, content, date }) => {
  const blogUrl = `/publicaciones/${id}`;

  return (
    <div className="card-compact rounded-xl bg-base-100">
      <Link to={blogUrl} className="hover:underline">
        <figure>
          <img
            src={image}
            className="w-full h-[220px] object-cover"
            alt="post image"
          />
        </figure>
        <div className="flex flex-col gap-6 md:gap-2 py-4">
          <h1 className="text-xl font-medium h-16 md:h-20">{title}</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-6 md:gap-2 py-4">
        <div className="h-20">
          {content}
          <Link to={blogUrl} className="btn btn-xs">
            Leer más
          </Link>
        </div>
        <div className="flex text-sm gap-2 border-t-2 border-base-300 pt-1">
          <img
            src="https://api.iconify.design/ic:baseline-calendar-month.svg"
            alt=""
          />
          {date}
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};

export default BlogCard;
