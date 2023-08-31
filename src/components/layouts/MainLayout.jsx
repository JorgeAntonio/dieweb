import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <main className="container max-w-screen-2xl mx-auto">
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;