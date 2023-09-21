import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import SocialMediaLink from "../../components/client/SocialMediaLink";
import ClientNavbar from "../../layouts/components/ClientNavbar";
import Footer from "../../layouts/components/Footer";
import { supabase } from "../../supabase/supabase.client";
import FormatDate, { SplitContent } from "../../utils/Utils";

export const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data, error } = await supabase
          .from("post")
          .select("*")
          .eq("id", id);

        if (error) {
          throw error;
        }

        if (data) {
          setPost(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPost();
  }, [id]);

  return (
    <>
      <ClientNavbar />
      {post.id ? (
        <>
          <header>
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="h-[500px] w-full object-cover"
            />
          </header>
          <main className="flex flex-col justify-center items-center max-w-4xl mx-auto pb-16 px-4 md:px-8">
            <section>
              <h1 className="text-xl md:text-6xl font-medium py-8">
                {post.title}
              </h1>
              <div className="text-sm text-gray-500 pb-8">
                <strong>{post.author}</strong> | {post.category} | Publicado,{" "}
                {FormatDate(post.created_at)}
              </div>

              <article className="text-base md:text-lg">
                {SplitContent(post.content).map((paragraph, index) => (
                  <p className="pb-4" key={index}>
                    {paragraph}
                  </p>
                ))}
              </article>
            </section>
            <section>
              <SocialMediaLink />
            </section>
          </main>
        </>
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </>
  );
};
