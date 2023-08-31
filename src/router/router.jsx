import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error/error_page.jsx";
import HomePage from "../pages/home/home_page.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import LoginLayout from "../components/layouts/LoginLayout.jsx";
import SigInPage from "../pages/signin/signin_page.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            }
        ]
    },
    {
        path: "/signin",
        element: <LoginLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <SigInPage/>
            }
        ]
    }

])

export default router