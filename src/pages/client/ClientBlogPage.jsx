import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import BlogCard from "../../components/client/BlogCard";
import ClientNavbar from "../../layouts/components/ClientNavbar";
import Footer from "../../layouts/components/Footer";
import { supabase } from "../../supabase/supabase.client";

export default function ClientBlogPage() {
  const [posts, setPosts] = useState([]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return newDate.toLocaleDateString("es-ES", options);
  };

  const getPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("post")
        .select("*")
        .order("id", { ascending: false });
      if (error) throw error;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <ClientNavbar />
      {posts && posts.length > 0 ? (
        <div className="px-4 md:px-8 md:pb-16 pt-24">
          <h1 className="text-2xl md:text-3xl font-bold text-start md:text-start mb-4">
            Publicaciones
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <BlogCard
                key={idx}
                title={post.title}
                image={post.featured_image_url}
                date={formatDate(post.created_at)}
              />
            ))}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </>
  );
}
