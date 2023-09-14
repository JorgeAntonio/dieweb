import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiciosSection from "../components/Services/ServiciosSection";

const ServiciosLayout = () => {
    return (
        <div>
            <Navbar/>
            <main className="container max-w-screen-2xl mx-auto">
                <ServiciosSection/>
            </main>
            <Footer />
        </div>
    )
}

export default ServiciosLayout;