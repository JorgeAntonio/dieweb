import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.client";

const BlogContext = createContext({});

export const useBlogs = () => useContext(BlogContext);

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");

  const addPost = async (post) => {
    try {
      const { data, error } = await supabase.from("post").insert(post);
      if (error) setErrorMsg(error.message);
      if (data) {
        setPosts((prevPosts) => [...prevPosts, data[0]]);
        setMsg("Post added successfully");
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const fetAllPosts = async () => {
    const { data, error } = await supabase.from("post").select();
    if (error) setErrorMsg(error.message);
    if (data) setPosts(data);
  };

  const editPost = async (contact, id) => {
    const { data, error } = await supabase
      .from("post")
      .update(contact)
      .eq("id", id)
      .select();

    if (error) {
      setErrorMsg(error.message);
      console.log(error.message);
    }
    if (data) {
      setMsg("Post updated successfully");
      const updatedPosts = posts.map((post) => {
        if (id === post.id) {
          return { ...post, ...data[0] };
        }
      });
      setPosts(updatedPosts);
    }
  };

  const deletePost = async (id) => {
    const { error } = await supabase.from("post").delete().eq("id", id);
    if (error) {
      setErrorMsg(error.message);
      console.log(error.message);
    } else {
      setMsg("Post deleted successfully");
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    }
  };

  useEffect(() => {
    fetAllPosts();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        posts,
        msg,
        setMsg,
        errorMsg,
        setErrorMsg,
        addPost,
        fetAllPosts,
        editPost,
        deletePost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
