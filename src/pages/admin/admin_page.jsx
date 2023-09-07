import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CasesCard from "../../components/admin/CasesCard";
import { supabase } from "../../supabaseClient";

const AdminPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad del Alert

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = supabase.auth.getUser(); // Obtener información del usuario de Supabase

        if (user) {
          setUserEmail((await user).data.user.email);

          // Comprobar si ya se ha mostrado el Alert
          const hasSeenAlert = localStorage.getItem("hasSeenAlert");
          if (!hasSeenAlert) {
            setShowAlert(true); // Mostrar el Alert si hay un usuario autenticado y no se ha visto antes
            // Marcar como visto en el localStorage
            localStorage.setItem("hasSeenAlert", "true");
          }
        }
      } catch (error) {
        console.error(
          "Error al obtener información del usuario:",
          error.message
        );
      }
    };

    fetchData();
  }, []);

  // Ocultar el Alert automáticamente después de 3 segundos si no ha sido cerrado manualmente
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showAlert) {
        setShowAlert(false);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert]);

  return (
    <div className="container mx-auto p-4 md:px-8 md:pb-16">
      {showAlert && ( // Mostrar el Alert solo si showAlert es true
        <Alert severity="info" variant="filled">
          Bienvenido, {userEmail}
        </Alert>
      )}
      <h1 className="text-2xl font-bold pb-8">Panel de Administración</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 g-8 md:g-16">
        <Link to="/">
          <CasesCard
            title="Emprendedores"
            description="Gestiona los datos de los emprendedores."
          />
        </Link>
        <CasesCard
          title="Perfil Emprendedores"
          description="Gestiona los perfiles de los emprendedores."
        />
        <CasesCard
          title="Eventos"
          description="Gestiona los eventos y actividades."
        />
        <CasesCard
          title="Publicaciones"
          description="Gestiona las publicaciones y contenido."
        />
      </div>
    </div>
  );
};

export default AdminPage;
