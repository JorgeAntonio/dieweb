import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import ConfirmModal from "../../components/ConfirmModal";
import ToastMessage from "../../components/ToastMessage";
import BlogModal from "../../components/blog/BlogModal";
import { useBlogs } from "../../context/BlogContext";

const BlogList = () => {
  const { posts, msg, setMsg, errorMsg, setErrorMsg } = useBlogs();
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [type, setType] = useState("");
  const [activeBlog, setActiveBlog] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const closeConfirmModal = () => {
    setActiveBlog({});
    setShowConfirmModal(false);
  };

  const closeContactModal = () => {
    setActiveBlog({});
    setShowBlogModal(false);
    setType("");
  };

  const handleAdd = () => {
    setType("Add");
    setShowBlogModal(true);
  };

  return (
    <div>
      <ToastMessage
        type="Success"
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
      <BlogModal
        show={showBlogModal}
        handleClose={closeContactModal}
        type={type}
        contact={activeBlog}
      />
      <ConfirmModal
        show={showConfirmModal}
        handleClose={closeConfirmModal}
        id={activeBlog.id}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <h2 className="text-center">Contact List</h2>
        <Button onClick={handleAdd}>Add Contact</Button>
      </div>
      <Table striped bordered responsive variant="dark">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>S.No</th>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "30%" }}>Phone</th>
            <th style={{ width: "30%" }}>Address</th>
            <th style={{ width: "5%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.author}</td>
              <td className="d-flex flex-row justify-content-around">
                <i
                  className="bi bi-pencil-square icon"
                  onClick={() => {
                    setActiveBlog(post);
                    setType("Edit");
                    setShowBlogModal(true);
                  }}
                ></i>
                <i
                  className="bi bi-trash3 icon"
                  onClick={() => {
                    setActiveBlog(post);
                    setShowConfirmModal(true);
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BlogList;
