import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar.jsx";
import Footer from "./components/Footer.jsx";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <main className="container max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
