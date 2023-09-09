import { useEffect, useState } from "react";

function EntrepreneursPage() {
  // Estado para almacenar la lista de solicitudes de emprendedores
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  // Estado para mostrar el mensaje de notificación
  const [notification, setNotification] = useState("");

  // Función para cargar las solicitudes de emprendedores (simulado)
  const loadEntrepreneurs = () => {
    // Simulación de carga de datos (puedes reemplazarlo con una solicitud real a tu API)
    const data = [
      {
        id: 1,
        name: "Emprendedor 1",
        startup: "hola mundo",
        status: "Pendiente",
      },
      {
        id: 2,
        name: "Emprendedor 2",
        startup: "hola mundo",
        status: "Aprobado",
      },
      {
        id: 3,
        name: "Emprendedor 3",
        startup: "hola mundo",
        status: "Rechazado",
      },
      {
        id: 3,
        name: "Emprendedor 3",
        startup: "hola mundo",
        status: "Rechazado",
      },
      {
        id: 3,
        name: "Emprendedor 3",
        startup: "hola mundo",
        status: "Rechazado",
      },
      {
        id: 3,
        name: "Emprendedor 3",
        startup: "hola mundo",
        status: "Rechazado",
      },
      {
        id: 3,
        name: "Emprendedor 3",
        startup: "hola mundo",
        status: "Rechazado",
      },
      {
        id: 3,
        name: "Emprendedor 3",
        startup: "hola mundo",
        status: "Rechazado",
      },
      {
        id: 3,
        name: "Emprendedor 3",
        startup: "hola mundo",
        status: "Rechazado",
      },
    ];
    setEntrepreneurs(data);
  };

  // Simular la carga inicial de solicitudes de emprendedores
  useEffect(() => {
    loadEntrepreneurs();
  }, []);

  // Función para aprobar una solicitud de emprendedor
  const approveEntrepreneur = (id) => {
    // Simulación de aprobación (puedes implementar la lógica real aquí)
    // Por ejemplo, puedes enviar una solicitud al servidor para actualizar el estado
    setNotification(`Solicitud de Emprendedor ${id} aprobada.`);
  };

  // Función para rechazar una solicitud de emprendedor
  const rejectEntrepreneur = (id) => {
    // Simulación de rechazo (puedes implementar la lógica real aquí)
    // Por ejemplo, puedes enviar una solicitud al servidor para actualizar el estado
    setNotification(`Solicitud de Emprendedor ${id} rechazada.`);
  };

  return (
    <div className="mx-auto p-4 md:p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Emprendedores</h1>
        <button className="btn btn-primary">Agregar Nuevo</button>
      </div>
      {notification && <div className="alert">{notification}</div>}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
            {/* row 1 */}
            {entrepreneurs.map((entrepreneur) => (
              <tr key={entrepreneur.id}>
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
                      <div className="font-bold">{entrepreneur.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Z{entrepreneur.startup}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{entrepreneur.status}</td>
                <th>
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
