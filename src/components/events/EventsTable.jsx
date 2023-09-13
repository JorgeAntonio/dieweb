import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEntrepreneurContext } from "../../context/EntrepreneurContext";
import DetailsModal from "../entrepreneurs/DetailsModal";

export default function EventTable() {
  const navigate = useNavigate();
  const { entrepreneurs } = useEntrepreneurContext();
  const [selectedEntrepreneur, setSelectedEntrepreneur] = useState(null);

  return (
    <div className="h-[450px]">
      {selectedEntrepreneur && (
        <DetailsModal
          open={true} // Abre el modal cuando selectedEntrepreneur no es nulo
          handleClose={() => {
            setSelectedEntrepreneur(null); // Cierra el modal y borra el emprendedor seleccionado
          }}
          {...selectedEntrepreneur}
        />
      )}
      <DataGrid
        rows={entrepreneurs?.map((entrepreneur) => ({
          id: entrepreneur?.id ? entrepreneur.id : "",
          name: entrepreneur?.name ? entrepreneur.name : "",
          lastname: entrepreneur?.lastname ? entrepreneur.lastname : "",
          dni: entrepreneur?.dni ? entrepreneur.dni : "",
          email: entrepreneur?.email ? entrepreneur.email : "",
          phone: entrepreneur?.phone ? entrepreneur.phone : "",
          address: entrepreneur?.address ? entrepreneur.address : "",
          startup: entrepreneur?.startup ? entrepreneur.startup : "",
          status: entrepreneur?.status ? entrepreneur.status : false,
        }))}
        columns={[
          {
            field: "id",
            headerName: "ID",
            width: 70,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "fullname",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (params) =>
              `${params.row.name || ""} ${params.row.lastname || ""}`,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "phone",
            headerName: "Teléfono",
            width: 130,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "startup",
            headerName: "Startup",
            width: 130,
            renderCell: (params) => <div>{params.value}</div>,
          },
          {
            field: "status",
            headerName: "Estado",
            width: 130,
            renderCell: (params) => (
              <div>
                {
                  // Si el estado es activo, muestra el texto en verde
                  params.value === "activo" ? (
                    <span className={"text-primary"}>Activo</span>
                  ) : (
                    // Si el estado es inactivo, muestra el texto en rojo
                    <span className={"text-error"}>Inactivo</span>
                  )
                }
              </div>
            ),
          },
          {
            field: "detail",
            headerName: "Detalles",
            width: 130,
            renderCell: (params) => (
              <button
                onClick={() => {
                  setSelectedEntrepreneur(params.row);
                  document.getElementById("my_modal_5").showModal();
                }}
                className={"btn btn-info btn-sm capitalize"}
              >
                Detalles
              </button>
            ),
          },
          {
            field: "update",
            headerName: "Actualizar",
            width: 130,
            renderCell: (params) => (
              <button
                onClick={() => {
                  navigate(`/admin/emprendedor/${params.row.id}`);
                }}
                className={"btn btn-secondary btn-sm capitalize"}
              >
                Actualizar
              </button>
            ),
          },
        ]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
