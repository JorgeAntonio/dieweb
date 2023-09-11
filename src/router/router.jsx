import { Navigate, Route, Routes } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import LoginLayout from "../layouts/LoginLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import DetailsEntrepreneurPage from "../pages/admin/DetailsEntrepreneurPage.jsx";
import RegisterEntrepreneurPage from "../pages/admin/RegisterEntrepreneurPage.jsx";
import AdminPage from "../pages/admin/admin_page.jsx";
import EntrepreneursPage from "../pages/admin/EntrepreneursPage.jsx";
import SigInPage from "../pages/admin/SigninPage.jsx";
import HomePage from "../pages/client/home_page.jsx";
import ErrorPage from "../pages/error/error_page.jsx";

export default function MyRouter() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path={"/signin"} element={<LoginLayout />}>
        <Route index element={<SigInPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route
        path="/admin"
        element={user ? <AdminLayout /> : <Navigate to="/" />}
      >
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"emprendedor"} element={<EntrepreneursPage />} />
        <Route
          path={"emprendedor/registrar"}
          element={<RegisterEntrepreneurPage />}
        />
        <Route path={"emprendedor/:id"} element={<DetailsEntrepreneurPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
