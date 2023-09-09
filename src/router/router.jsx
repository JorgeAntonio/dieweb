import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/client/home_page.jsx";
import ErrorPage from "../pages/error/error_page.jsx";
import LoginLayout from "../layouts/LoginLayout.jsx";
import SigInPage from "../pages/admin/signin_page.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import AdminPage from "../pages/admin/admin_page.jsx";
import EntrepreneursPage from "../pages/admin/entrepreneurs_page.jsx";

export default function MyRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>

            </Route>

            <Route path={"/signin"} element={<LoginLayout/>}>
                <Route index element={<SigInPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
            <Route path={"/admin"} element={<AdminLayout/>}>
                <Route path={"/admin"} element={<AdminPage/>}/>
                <Route path={"emprendedores"} element={<EntrepreneursPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
}