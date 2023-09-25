import { Link } from "react-router-dom";
import { usePosts } from "../../context/PostProvider";
import LoadingSpinner from "../LoadingSpinner";

export const BlogSection = () => {
  const { posts } = usePosts();

  return (
    <section className="py-4 md:py-16 px-4 md:px-8 h-full">
      <h1 className="text-3xl font-semibold mb-16 text-center uppercase">
        ¡Te invitamos a leer nuestro blog!
      </h1>
      <div className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-center md:text-start">
            Últimos artículos
          </h1>
          <Link to="/publicaciones" className="btn btn-ghost btn-xs">
            Ver más
          </Link>
        </div>
        {posts.length === 0 ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="flex flex-col justify-center items-center gap-4"
              >
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  className="w-full h-52 object-cover rounded-md"
                />
                <h1 className="text-xl font-bold">{post.title}</h1>
                <p className="text-gray-500">{post.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
