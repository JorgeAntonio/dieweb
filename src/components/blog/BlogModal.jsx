import { useRef, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useBlogs } from "../../context/BlogContext";

const BlogModal = ({ show, handleClose, type, post }) => {
  const [loading, setLoading] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const authorRef = useRef(null);
  const { addPost, setErrorMsg, editPost } = useBlogs();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (
        !titleRef.current?.value ||
        !contentRef.current?.value ||
        !authorRef.current?.value
      ) {
        alert("Please fill in all the fields");
        return;
      }
      const postToSave = {
        title: titleRef.current.value,
        content: contentRef.current.value,
        author: authorRef.current.value,
      };
      if (type === "Edit") {
        await editPost(postToSave, post.id);
      } else {
        await addPost(postToSave);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Error in saving contact");
    }
    setLoading(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="text-center" closeButton>
        <h2>{type} Contact</h2>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={titleRef}
                  defaultValue={post?.title ?? ""}
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  ref={contentRef}
                  defaultValue={post?.content ?? ""}
                  required
                />
              </Form.Group>
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  ref={authorRef}
                  defaultValue={post?.author ?? ""}
                  required
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={loading} variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default BlogModal;
