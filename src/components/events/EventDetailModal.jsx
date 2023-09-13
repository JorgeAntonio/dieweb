import PropTypes from "prop-types";

export default function EventDetailModal(props) {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <h3 className="font-bold text-lg mb-4">Detalles</h3>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <label className="font-semibold">Titulo:</label>
                  <label className="font-semibold">Descripción:</label>
                  <label className="font-semibold">Fecha:</label>
                  <label className="font-semibold">Hora:</label>
                  <label className="font-semibold">Lugar:</label>
                  <label className="font-semibold">Imagen:p</label>
                  <label className="font-semibold">Enlace:</label>
                  <label className="font-semibold">Estado:</label>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4">
                  <p className="">{props.title}</p>
                  <p className="">{props.description}</p>
                  <p className="">{props.date}</p>
                  <p className="">{props.time}</p>
                  <p className="">{props.location}</p>
                  <p className="">{props.image}</p>
                  <p className="">{props.link}</p>
                  <p className="">{props.status}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

EventDetailModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  status: PropTypes.string,
};
