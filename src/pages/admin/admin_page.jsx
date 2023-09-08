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
    <div className="mx-auto p-4 md:px-8 md:py-16">
      {showAlert && ( // Mostrar el Alert solo si showAlert es true
        <Alert severity="info" variant="filled">
          Bienvenido, {userEmail}
        </Alert>
      )}
      <h1 className="text-2xl font-bold pb-8">Panel de Administración</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
        <Link to="/">
          <CasesCard
            title="Emprendedores"
            description="Gestiona los datos de los emprendedores."
            image="https://img.freepik.com/free-photo/asia-female-ceramist-with-apron-hand-confident-chest-her-workshop-clay-sculpture-studio-with-positive-smiling-warm-welcome-ready-start-new-factory-ceramic-workshop-with-new-collection-work_609648-2716.jpg?w=1060&t=st=1694154668~exp=1694155268~hmac=7276541ac87f7a52491a73d583a46d28b3dcfa1098f775337c8d0d5e7a772132"
          />
        </Link>
        <CasesCard
          title="Perfil Emprendedores"
          description="Gestiona los perfiles de los emprendedores."
          image="https://img.freepik.com/free-vector/startup-landing-page-web-template_23-2148317383.jpg?w=1060&t=st=1694154744~exp=1694155344~hmac=66d0eee256e0bf9500305c306c064af66715d3aa24f92989dc5faf0c4ce4e56b"
        />
        <CasesCard
          title="Eventos"
          description="Gestiona los eventos y actividades."
          image="https://img.freepik.com/free-photo/structured-building-construction-design-plan-concept_53876-123739.jpg?w=1060&t=st=1694154940~exp=1694155540~hmac=b42a38bd35d471afebb3e89043e7ab883111c783cd695445ca7d72aa8e46d6d5"
        />
        <CasesCard
          title="Publicaciones"
          description="Gestiona las publicaciones y contenido."
          image="https://img.freepik.com/free-psd/wedding-planner-instagram-posts_23-2150742720.jpg?w=996&t=st=1694155173~exp=1694155773~hmac=3b7562dd2752e46cdf47263bcd9f364bdc1f41c73313dd7a56d3da023bc47d12"
        />
      </div>
    </div>
  );
};

export default AdminPage;
