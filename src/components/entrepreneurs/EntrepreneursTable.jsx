import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useEntrepreneurContext } from "../../context/EntrepreneurContext";
import { supabase } from "../../supabase/supabase.client";

export default function DataTable() {
  const navigate = useNavigate();
  const { entrepreneurs, setEntrepreneurs } = useEntrepreneurContext();

  // Función para cambiar el estado del emprendedor
  const handleStatusUpdate = async (id) => {
    // Obten el emprendedor con el ID especificado
    const entrepreneurToUpdate = entrepreneurs.find(
      (entrepreneur) => entrepreneur.id === id
    );

    if (entrepreneurToUpdate) {
      // Cambia el valor booleano
      entrepreneurToUpdate.status = !entrepreneurToUpdate.status;

      // Actualiza el estado local
      setEntrepreneurs([...entrepreneurs]);

      // Actualiza el valor en la base de datos
      try {
        const { data, error } = await supabase
          .from("entrepreneurs")
          .update({ status: entrepreneurToUpdate.status })
          .eq("id", id);

        if (error) {
          console.error("Error actualizando el estado del emprendedor:", error);
        }

        if (data) {
          console.log("Emprendedor actualizado exitosamente");
        }
      } catch (error) {
        console.error("Error actualizando el estado del emprendedor:", error);
      }
    }
  };

  return (
    <div className="h-[400px] mx-auto container">
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
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "fullname",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (params) =>
              `${params.row.name || ""} ${params.row.lastname || ""}`,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "dni",
            headerName: "DNI",
            width: 130,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "email",
            headerName: "Email",
            width: 130,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "phone",
            headerName: "Teléfono",
            width: 130,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "address",
            headerName: "Dirección",
            width: 130,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "startup",
            headerName: "Startup",
            width: 130,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "status",
            headerName: "Estado",
            width: 130,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "update",
            headerName: "Actualizar",
            width: 130,
            renderCell: (params) => (
              <strong>
                <button
                  onClick={() => {
                    navigate(`/admin/emprendedor/${params.row.id}`);
                  }}
                  className={"btn btn-ghost btn-sm"}
                >
                  Actualizar
                </button>
              </strong>
            ),
          },
          {
            field: "desactivar",
            headerName: "Estado",
            width: 130,
            renderCell: (params) => (
              <strong>
                <button
                  onClick={() => {
                    handleStatusUpdate(params.row.id);
                  }}
                  className={"btn btn-ghost btn-sm"}
                >
                  {params.value ? "Desactivar" : "Activar"}{" "}
                </button>
              </strong>
            ),
          },
        ]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
