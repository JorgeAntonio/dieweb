import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.client";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

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
    <div>
      <div className="p-4 md:p-8">
        <h1 className="mt-4 mb-3 text-3xl font-bold pb-8">Publicaciones</h1>

        <div className="row">
          <div className="col-lg-8">
            {posts.map((post, idx) => (
              <div className="card mb-4" key={idx}>
                <img
                  className="card-img-top h-[400px] object-cover"
                  src={post.featured_image_url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p className="card-text">{post.content}</p>
                  <a href="#" className="btn btn-primary">
                    Read More &rarr;
                  </a>
                </div>
                <div className="card-footer text-muted">
                  {post.created_at}
                  <a href="#">Leer más</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
