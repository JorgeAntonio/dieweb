import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventsTableHome from "../components/home/EventsTableHome.jsx";

const EventsLayout = () => {
    return (
        <div>
            <Navbar/>
            <main className="container max-w-screen-2xl mx-auto">
                <EventsTableHome/>
            </main>
            <Footer />
        </div>
    )
}

export default EventsLayout;