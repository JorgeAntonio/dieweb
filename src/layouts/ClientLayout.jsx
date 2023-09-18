import { Outlet } from "react-router-dom";
import ClientNavbar from "./components/ClientNavbar.jsx";
import Footer from "./components/Footer.jsx";

const ClientLayout = () => {
  return (
    <div>
      <ClientNavbar />
      <main className="container max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
