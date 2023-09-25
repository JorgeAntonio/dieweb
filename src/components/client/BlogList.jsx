import { LoadingSpinner } from "../../components/LoadingSpinner";
import BlogCard from "../../components/client/BlogCard";
import { usePosts } from "../../context/PostProvider";
import FormatDate, { CutWordsContent, CutWordsTitle } from "../../utils/Utils";

export default function BlogList() {
  const { posts } = usePosts();

  return (
    <>
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
    </>
  );
}
