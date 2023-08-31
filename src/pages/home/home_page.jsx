import HeroSection from "../../components/home/HeroSection.jsx";
import TalentSection from "../../components/home/TalentSection.jsx";
import AboutSection from "../../components/home/AboutSection.jsx";
import ServicesSection from "../../components/home/ServicesSection.jsx";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <TalentSection/>
            <AboutSection />
            <ServicesSection />
        </div>
    );
};

export default HomePage;
