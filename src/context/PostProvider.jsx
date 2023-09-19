import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.client";

const PostContext = createContext({});

export const usePosts = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");

  const addPost = async (post) => {
    const { data, error } = await supabase.from("post").insert(post).select();
    if (data) {
      setPosts((prevPosts) => [...prevPosts, data[0]]);
      setMsg("Post Added Successfully");
    }
    if (error) {
      setErrorMsg(error.message);
    }
  };

  const fetchAll = async () => {
    const { data, error } = await supabase
      .from("post")
      .select()
      .order("id", { ascending: false });
    if (data) setPosts(data);
    if (error) setErrorMsg("Error in Fetching Posts");
  };

  const editPost = async (post, id) => {
    const { data, error } = await supabase
      .from("post")
      .update(post)
      .eq("id", id)
      .select();
    if (error) {
      setErrorMsg(error.message);
      console.error(error);
    }
    if (data) {
      setMsg("Post Updated");
      const updatedPosts = posts.map((post) => {
        if (id === post.id) {
          return { ...post, ...data[0] };
        }
        return post;
      });
      setPosts(updatedPosts);
    }
  };

  const fetchPost = async (id) => {
    const { data, error } = await supabase
      .from("post")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      setErrorMsg(error.message);
      console.error(error);
    }
    if (data) {
      setMsg("Post Updated");
      const updatedPosts = posts.map((post) => {
        if (id === post.id) {
          return { ...post, ...data[0] };
        }
        return post;
      });
      setPosts(updatedPosts);
    }
  };

  const searchPost = async (title) => {
    const { data, error } = await supabase
      .from("post")
      .select("*")
      .ilike("title", `%${title}%`)
      .order("id", { ascending: false });
    if (error) {
      setErrorMsg(error.message);
      console.error(error);
    }
    if (data) {
      setMsg("Post Found");
      const updatedPosts = posts.map((post) => {
        if (title === post.title) {
          return { ...post, ...data[0] };
        }
        return post;
      });
      setPosts(updatedPosts);
    }
  };

  const deletePost = async (id) => {
    const { error } = await supabase.from("post").delete().eq("id", id);
    if (error) {
      setErrorMsg(error.message);
    } else {
      setMsg("Post Deleted Successfully");
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        msg,
        setMsg,
        errorMsg,
        fetchPost,
        setErrorMsg,
        addPost,
        fetchAll,
        editPost,
        deletePost,
        searchPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostProvider;
