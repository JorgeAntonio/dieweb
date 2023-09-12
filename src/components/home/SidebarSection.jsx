const Sidebar = () => {
  // Define una lista de eventos
  const eventos = [
    {
      titulo: "Evento 1",
      fecha: "Fecha 1",
      descripcion: "Descripción 1",
      hora: "Hora 1",
      lugar: "Lugar 1",
    },
    {
      titulo: "Evento 2",
      fecha: "Fecha 2",
      descripcion: "Descripción 2",
      hora: "Hora 2",
      lugar: "Lugar 2",
    },
    // Agrega más eventos aquí según sea necesario
  ];

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {eventos.map((evento, index) => (
        <li key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{evento.titulo}</h3>
          <p className="text-gray-600 text-sm">
            <strong>Fecha:</strong> {evento.fecha}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Descripción:</strong> {evento.descripcion}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Hora:</strong> {evento.hora}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Lugar:</strong> {evento.lugar}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
