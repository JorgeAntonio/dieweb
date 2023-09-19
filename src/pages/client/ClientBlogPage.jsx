import React, { useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import BlogCard from "../../components/client/BlogCard";
import { BlogHeader } from "../../components/client/BlogHeader";
import { Tab } from "../../components/client/Tab";
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
      if (error) {
        throw error;
      }
      if (data) {
        setPosts(data);
        console.log("Posts cargados correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () => {
      getPosts();
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <ClientNavbar />
      <BlogHeader />
      <Tab />
      {posts && posts.length > 0 ? (
        <div className="px-4 md:px-8 md:pb-16 md:pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-start md:text-start pb-2">
              Publicaciones recientes
            </h1>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
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
