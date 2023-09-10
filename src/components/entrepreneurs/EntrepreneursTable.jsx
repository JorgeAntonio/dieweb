import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEntrepreneurContext } from "../../context/EntrepreneurContext";
import { supabase } from "../../supabase/supabase.client";

export default function DataTable() {
  const { entrepreneurs } = useEntrepreneurContext();
  const [notification, setNotification] = useState(null);

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

  return (
    <div className="h-[400px] mx-auto container">
      {notification && <div className="alert">{notification}</div>}
      <DataGrid
        rows={entrepreneurs?.map((entrepreneur) => ({
          id: entrepreneur?.id ? entrepreneur.id : "",
          name: entrepreneur?.name ? entrepreneur.name : "",
          startup: entrepreneur?.startup ? entrepreneur.startup : "",
          status: entrepreneur?.status ? entrepreneur.status : "",
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
            field: "name",
            headerName: "Nombre",
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
            field: "fullname",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (params) =>
              `${params.row.name || ""} ${params.row.startup || ""}`,
            renderCell: (params) => (
              <div className="font-bold">{params.value}</div>
            ),
          },
          {
            field: "avatar",
            headerName: "Avatar",
            width: 130,
            renderCell: (params) => (
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  src=
                  {params.row.avatar ||
                    "https://daisyui.com/tailwind-css-component-profile-2@56w.png"}
                  alt={params.row.name}
                </div>
              </div>
            ),
          },
          {
            field: "update",
            headerName: "Detalles",
            width: 130,
            renderCell: (params) => (
              <strong>
                <Link to={`registrar/${params.value}`}>
                  <button className={"btn btn-info btn-sm"}>Ver</button>
                </Link>
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
