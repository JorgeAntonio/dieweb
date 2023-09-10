import {useState} from "react";

function EntrepreneurModal() {
    const [name, setName] = useState("");
    const [startup, setStartup] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Registrar Emprendedor</h3>
                <form>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="startup">Empresa:</label>
                        <input
                            type="text"
                            id="startup"
                            name="startup"
                            value={startup}
                            onChange={(e) => setStartup(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="status">Estado:</label>
                        <input
                            type="text"
                            id="status"
                            name="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>
                    <div className="modal-action">
                        <button className="btn">
                            Registrar Emprendedor
                        </button>
                        <button className="btn">
                            Cerrar
                        </button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </dialog>
    );
}

export default EntrepreneurModal;