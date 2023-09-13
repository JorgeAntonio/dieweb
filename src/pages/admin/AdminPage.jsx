import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CasesCard from "../../components/admin/CasesCard.jsx";
import { UserAuth } from "../../context/AuthContext.jsx";

const AdminPage = () => {
  const { user } = UserAuth();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem("hasSeenAlert");
    if (!hasSeenAlert) {
      setShowAlert(true);
      localStorage.setItem("hasSeenAlert", true);
    }
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
      {showAlert && <div className="alert"> Bienvenido, {user.email}</div>}
      <h1 className="text-2xl font-bold pb-8">Panel de Administración</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
        <Link to="/admin/emprendedor">
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
        <Link to={"/admin/eventos"}>
          <CasesCard
            title="Eventos"
            description="Gestiona los eventos y actividades."
            image="https://img.freepik.com/free-photo/structured-building-construction-design-plan-concept_53876-123739.jpg?w=1060&t=st=1694154940~exp=1694155540~hmac=b42a38bd35d471afebb3e89043e7ab883111c783cd695445ca7d72aa8e46d6d5"
          />
        </Link>

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
