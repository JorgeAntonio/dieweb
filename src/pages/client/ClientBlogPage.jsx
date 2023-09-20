import { LoadingSpinner } from "../../components/LoadingSpinner";
import BlogCard from "../../components/client/BlogCard";
import { BlogHeader } from "../../components/client/BlogHeader";
import { usePosts } from "../../context/PostProvider";
import ClientNavbar from "../../layouts/components/ClientNavbar";
import Footer from "../../layouts/components/Footer";

export default function ClientBlogPage() {
  const { posts } = usePosts();

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return newDate.toLocaleDateString("es-ES", options);
  };

  const cutWordsTitle = (content) => {
    const words = content.split(" ");
    return words.slice(0, 10).join(" ");
  };

  const cutWordsContent = (content) => {
    const words = content.split(" ");
    return words.slice(0, 13).join(" ");
  };

  return (
    <>
      <ClientNavbar />
      <BlogHeader />
      <div className="px-4 md:px-8 md:pb-16 md:pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center pb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-start md:text-start">
            Publicaciones recientes
          </h1>
          <input
            type="text"
            placeholder="Buscar..."
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                image={post.featured_image_url}
                title={cutWordsTitle(post.title) + "..."}
                content={cutWordsContent(post.content) + "..."}
                date={formatDate(post.created_at)}
              />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <Footer />
    </>
  );
}
