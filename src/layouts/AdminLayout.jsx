import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";
// import Navbar from "./components/Navbar.jsx";

const AdminLayout = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    <div>
      <main className="container max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to={"/"} replace state={{ path: location.pathname }} />
  );
};

export default AdminLayout;
