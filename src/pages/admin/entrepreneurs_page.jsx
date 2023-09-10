import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEntrepreneurContext } from "../../context/EntrepreneurContext.jsx";
import { supabase } from "../../supabase/supabase.client.jsx";

function EntrepreneursPage() {
  const { entrepreneurs, removeEntrepreneur } = useEntrepreneurContext();
  const [notification, setNotification] = useState("");

  async function handleDeleteEntrepreneur(id) {
    await removeEntrepreneur(id);
    setNotification(`Solicitud de Emprendedor ${id} eliminada.`);
  }

  useEffect(() => {
    supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "entrepreneurs" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
  }, []);

  setTimeout(() => {
    setNotification(null);
  }, 5000);

  const approveEntrepreneur = (id) => {
    // Simulación de aprobación (puedes implementar la lógica real aquí)
    // Por ejemplo, puedes enviar una solicitud al servidor para actualizar el estado
    setNotification(`Solicitud de Emprendedor ${id} aprobada.`);
  };
  const rejectEntrepreneur = (id) => {
    // Simulación de rechazo (puedes implementar la lógica real aquí)
    // Por ejemplo, puedes enviar una solicitud al servidor para actualizar el estado
    setNotification(`Solicitud de Emprendedor ${id} rechazada.`);
  };

  return (
    <div className="mx-auto p-4 md:p-8">
      <div className="flex justify-between pb-4">
        <h1 className="text-2xl font-bold">Emprendedores</h1>
        <Link to="registrar">
          <button className={"btn btn-primary"}>Agregar Nuevo</button>
        </Link>
      </div>
      {notification && <div className="alert">{notification}</div>}
      <div className="overflow-x-auto"></div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {entrepreneurs.map((entrepreneur) => (
              <tr key={entrepreneur?.id ? entrepreneur.id : ""}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {entrepreneur?.name ? entrepreneur.name : ""}
                      </div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {entrepreneur?.startup ? entrepreneur.startup : ""}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{entrepreneur?.status ? entrepreneur.status : ""}</td>
                <th>
                  <button
                    className={"btn btn-error btn-xs"}
                    onClick={() => handleDeleteEntrepreneur(entrepreneur.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => approveEntrepreneur(entrepreneur.id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Aprobar
                  </button>
                  <button
                    onClick={() => rejectEntrepreneur(entrepreneur.id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Rechazar
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default EntrepreneursPage;
