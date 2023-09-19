import PropTypes from "prop-types";

export const BlogCard = ({ image, title, content, date }) => {
  return (
    <div className="card-compact rounded-xl bg-base-100">
      <figure>
        <img
          src={image}
          className="w-full h-[220px] object-cover rounded-xl"
          alt="post image"
        />
      </figure>
      <div className="flex flex-col gap-6 md:gap-2 py-4">
        <h1 className="text-xl font-medium h-16 md:h-20">{title}</h1>
        <div className="h-20">
          {content}
          <div className="btn btn-xs">Leer más</div>
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
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};

export default BlogCard;
