import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { usePosts } from "../../context/PostProvider";
import { Divider } from "../Divider";
import ToastMessage from "./../ToastMessage";

const PostModal = ({ isOpen, handleClose, type, post }) => {
  const [loading, setLoading] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const publishDateRef = useRef(null);
  const authorRef = useRef(null);
  const categoryRef = useRef(null);
  const imageRef = useRef(null);
  const { addPost, setErrorMsg, editPost, fetchPost } = usePosts();
  const [msg, setMsg] = useState("");

  const now = new Date();
  const nowString = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  if (!post?.publish_date) {
    post.publish_date = nowString;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setMsg("");
      setLoading(true);
      if (
        !titleRef.current?.value ||
        !contentRef.current?.value ||
        !publishDateRef.current?.value ||
        !authorRef.current?.value ||
        !categoryRef.current?.value ||
        !imageRef.current?.value
      ) {
        setErrorMsg("Por favor llena todos los campos");
        setMsg("Por favor llena todos los campos");
        setLoading(false);
        return;
      }
      const postToSave = {
        title: titleRef.current.value,
        content: contentRef.current.value,
        publish_date: publishDateRef.current.value,
        author: authorRef.current.value,
        category: categoryRef.current.value,
        featured_image_url: imageRef.current.value,
      };
      if (type === "Edit") {
        await editPost(postToSave, post.id);
      }
      if (type === "View") {
        await fetchPost(post.id);
      }
      if (type === "Add") {
        await addPost(postToSave);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Error en guardar publicación");
      setMsg("Error en guardar publicación");
    }
    setLoading(false);
    handleClose();
  };

  useEffect(() => {
    if (type === "View") {
      titleRef.current?.setAttribute("readonly", true);
      contentRef.current?.setAttribute("readonly", true);
      publishDateRef.current?.setAttribute("readonly", true);
      authorRef.current?.setAttribute("readonly", true);
      categoryRef.current?.setAttribute("readonly", true);
      imageRef.current?.setAttribute("readonly", true);
    }
  }, [type]);

  useEffect(() => {
    const modal = document.getElementById("my_modal_4");
    if (isOpen) {
      modal.showModal();
    }
  }, [isOpen]);

  return isOpen ? (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Agregar publicación</h3>
        <p className="py-4">
          Presiona la tecla Esc o el boton de Cancelar para cerrar.
        </p>
        {type === "View" ? (
          <div className="flex flex-col justify-between items-start gap-2">
            <p>
              <strong>Titulo:</strong> {post?.title}
            </p>
            <Divider />
            <p>
              <strong>Contenido:</strong> {post?.content}
            </p>
            <Divider />
            <p>
              <strong>Fecha:</strong> {nowString}
            </p>
            <Divider />
            <p>
              <strong>Autor:</strong> {post?.author}
            </p>
            <Divider />
            <p>
              <strong>Categoria:</strong> {post?.category}
            </p>
            <Divider />
            <p>
              <strong>Portada:</strong> {post?.featured_image_url}
            </p>
            <Divider />
          </div>
        ) : (
          <section className="modal-action">
            <ToastMessage
              type="Error"
              show={msg ? true : false}
              message={msg}
              handleClose={() => setMsg("")}
            />
            <div className="w-full pb-8">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Titulo</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-md"
                    ref={titleRef}
                    defaultValue={post?.title ?? ""}
                    required
                    autoFocus
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Contenido</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-md"
                    ref={contentRef}
                    defaultValue={post?.content ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Fecha de publicación</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={publishDateRef}
                    defaultValue={type === "Add" ? nowString : nowString}
                    readOnly
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Autor</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={authorRef}
                    defaultValue={post?.author ?? ""}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Categoria</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={categoryRef}
                    defaultValue={post?.category ?? ""}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Portada</span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-md"
                    type="text"
                    ref={imageRef}
                    defaultValue={post?.featured_image_url ?? ""}
                    required
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        <div className="modal-action">
          <form method="dialog">
            {type === "View" ? (
              <>
                <button className="btn" onClick={handleClose}>
                  Cancelar
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                {loading ? (
                  <button disabled className="btn btn-primary">
                    Guardando...
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Guardar
                  </button>
                )}
                <button className="btn" onClick={handleClose}>
                  Cancelar
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </dialog>
  ) : null;
};

PostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
};

export default PostModal;
