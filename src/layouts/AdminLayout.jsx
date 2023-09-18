import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="container max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
