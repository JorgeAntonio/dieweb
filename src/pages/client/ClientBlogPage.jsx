import { BlogHeader } from "../../components/client/BlogHeader";
import BlogList from "../../components/client/BlogList";

export default function ClientBlogPage() {
  return (
    <>
      <BlogHeader />
      <div className="px-4 md:px-8 md:pb-16 md:pt-16">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 md:pb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-start md:text-start">
            Publicaciones recientes
          </h1>
        </div>
        <BlogList />
      </div>
    </>
  );
}
