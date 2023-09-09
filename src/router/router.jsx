import {createBrowserRouter} from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout.jsx";
import LoginLayout from "../layouts/LoginLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AdminPage from "../pages/admin/admin_page.jsx";
import EntrepreneursPage from "../pages/admin/entrepreneurs_page.jsx";
import SigInPage from "../pages/admin/signin_page.jsx";
import HomePage from "../pages/client/home_page.jsx";
import ErrorPage from "../pages/error/error_page.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <HomePage/>,
            },
        ],
    },
    {
        path: "signin",
        element: <LoginLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <SigInPage/>,
            },
        ],
    },
    {
        path: "admin",
        element: <AdminLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <AdminPage/>,
            },
            {
                path: "emprendedores",
                element: <EntrepreneursPage/>,
            },
        ],
    },
]);

export default router;
