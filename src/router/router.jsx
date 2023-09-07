import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../components/layouts/LoginLayout.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import AdminLayout from "../components/layouts/components/AdminLayout.jsx";
import AdminPage from "../pages/admin/admin_page.jsx";
import ErrorPage from "../pages/error/error_page.jsx";
import HomePage from "../pages/home/home_page.jsx";
import SigInPage from "../pages/signin/signin_page.jsx";
import SigUpPage from "../pages/signup/signup_page.jsx";

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
    path: "dashboard",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
