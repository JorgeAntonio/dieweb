import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout.jsx";
import LoginLayout from "../components/layouts/LoginLayout.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import AdminPage from "../pages/admin/dashboard/admin_page.jsx";
import EntrepreneursPage from "../pages/admin/entrepreneurs/entrepreneurs_page.jsx";
import SigInPage from "../pages/admin/signin/signin_page.jsx";
import SigUpPage from "../pages/admin/signup/signup_page.jsx";
import HomePage from "../pages/client/home/home_page.jsx";
import ErrorPage from "../pages/error/error_page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "signin",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <SigInPage />,
      },
      {
        path: "signup",
        element: <SigUpPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            element: <SigUpPage />,
          },
        ],
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AdminPage />,
      },
      {
        path: "emprendedores",
        element: <EntrepreneursPage />,
      },
    ],
  },
]);

export default router;
