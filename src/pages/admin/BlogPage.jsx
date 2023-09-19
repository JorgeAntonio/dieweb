import { useState } from "react";
import detail from "../../assets/icons/eye.png";
import edit from "../../assets/icons/pen.png";
import trash from "../../assets/icons/trash.png";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import ToastMessage from "../../components/ToastMessage";
import ConfirmModalPost from "../../components/blog/ConfirmModalPost";
import PostModal from "../../components/blog/PostModal";
import { IconButton } from "../../components/icons/IconButton";
import { usePosts } from "../../context/PostProvider";

const BlogPage = () => {
  const { posts, msg, setMsg, errorMsg, setErrorMsg } = usePosts();
  const [showPostModal, setShowPostModal] = useState(false);
  const [type, setType] = useState("");
  const [activePost, setActivePost] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const closeConfirmModal = () => {
    setActivePost({});
    setShowConfirmModal(false);
  };

  const closePostModal = () => {
    setActivePost({});
    setShowPostModal(false);
    setType("");
  };

  const handleAdd = () => {
    setType("Add");
    setShowPostModal(true);
  };

  const handleViewPost = (post) => {
    setActivePost(post);
    setType("View");
    setShowPostModal(true);
  };

  const handleEditPost = (post) => {
    setActivePost(post);
    setType("Edit");
    setShowPostModal(true);
  };

  const handleDeletePost = (post) => {
    setActivePost(post);
    setShowConfirmModal(true);
  };

  return (
    <div className="p-8 md:p-16">
      <ToastMessage
        type="Exito"
        show={msg ? true : false}
        message={msg}
        handleClose={() => setMsg("")}
      />
      <ToastMessage
        type="Error"
        show={errorMsg ? true : false}
        message={errorMsg}
        handleClose={() => setErrorMsg("")}
      />
      <PostModal
        isOpen={showPostModal}
        handleClose={closePostModal}
        type={type}
        post={activePost}
      />
      <ConfirmModalPost
        show={showConfirmModal}
        handleClose={closeConfirmModal}
        id={activePost.id}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2 className="text-center text-xl font-semibold">
          Mantenimiento de blog
        </h2>
        <button className="btn btn-primary btn-sm" onClick={handleAdd}>
          Crear blog
        </button>
      </div>
      <div className="overflow-x-auto">
        {posts && posts.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Publicado</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{formatDate(post.publish_date)}</td>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td className="flex gap-2">
                    <IconButton
                      onClick={() => {
                        handleViewPost(post);
                      }}
                      icon={detail}
                    />
                    <IconButton
                      onClick={() => {
                        handleEditPost(post);
                      }}
                      icon={edit}
                    />
                    <IconButton
                      onClick={() => {
                        handleDeletePost(post);
                      }}
                      icon={trash}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
