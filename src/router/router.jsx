import { Navigate, Route, Routes } from "react-router-dom";
import { UserAuth } from "../context/AuthProvider.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import LoginLayout from "../layouts/LoginLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AdminPage from "../pages/admin/AdminPage.jsx";
import CreateEntrepreneurPage from "../pages/admin/CreateEntrepreneurPage.jsx";
import EntrepreneursPage from "../pages/admin/EntrepreneursPage.jsx";
import EventPage from "../pages/admin/EventPage.jsx";
import SigInPage from "../pages/admin/SigninPage.jsx";
import UpdateEntrepreneurPage from "../pages/admin/UpdateEntrepreneurPage.jsx";
import UpdateEventPage from "../pages/admin/UpdateEventPage.jsx";
import HomePage from "../pages/client/home_page.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";

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
      </Route>
      <Route
        path="/admin"
        element={user ? <AdminLayout /> : <Navigate to="/" />}
      >
        <Route path="*" element={<ErrorPage />} />
        <Route path={"panel"} element={<AdminPage />} />
        <Route path={"emprendedor"} element={<EntrepreneursPage />} />
        <Route path={"eventos"} element={<EventPage />} />
        <Route path={"emprendedor/eventos"} element={<EventPage />} />
        <Route
          path={"emprendedor/registrar"}
          element={<CreateEntrepreneurPage />}
        />
        <Route path={"emprendedor/:id"} element={<UpdateEntrepreneurPage />} />
        <Route path={"eventos/:id"} element={<UpdateEventPage />} />
      </Route>
    </Routes>
  );
}
