import { LoadingSpinner } from "../../components/LoadingSpinner";
import BlogCard from "../../components/client/BlogCard";
import { BlogHeader } from "../../components/client/BlogHeader";
import { usePosts } from "../../context/PostProvider";
import FormatDate, { CutWordsContent, CutWordsTitle } from "../../utils/Utils";

export default function ClientBlogPage() {
  const { posts } = usePosts();

  return (
    <>
      <BlogHeader />
      <div className="px-4 md:px-8 md:pb-16 md:pt-16">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 md:pb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-start md:text-start">
            Publicaciones recientes
          </h1>
        </div>
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                image={post.featured_image_url}
                title={CutWordsTitle(post.title) + "..."}
                content={CutWordsContent(post.content) + "..."}
                date={FormatDate(post.created_at)}
              />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}
