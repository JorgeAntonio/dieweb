import { useState } from "react";
import detail from "../../assets/icons/eye.png";
import edit from "../../assets/icons/pen.png";
import trash from "../../assets/icons/trash.png";
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
        <button className="btn btn-primary" onClick={handleAdd}>
          Crear blog
        </button>
      </div>
      <div className="overflow-x-auto">
        {posts && posts.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Publicado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>{formatDate(post.publish_date)}</td>
                  <td className="flex gap-2">
                    <IconButton
                      className="bi bi-eye icon"
                      onClick={() => {
                        setActivePost(post);
                        setType("View");
                        setShowPostModal(true);
                      }}
                      icon={detail}
                    />
                    <IconButton
                      className="bi bi-pencil-square icon"
                      onClick={() => {
                        setActivePost(post);
                        setType("Edit");
                        setShowPostModal(true);
                      }}
                      icon={edit}
                    />
                    <IconButton
                      className="bi bi-trash3 icon"
                      onClick={() => {
                        setActivePost(post);
                        setShowConfirmModal(true);
                      }}
                      icon={trash}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <div className="h-[300px] w-full flex justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
