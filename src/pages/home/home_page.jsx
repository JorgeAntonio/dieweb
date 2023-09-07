import AboutSection from "../../components/home/AboutSection.jsx";
import HeroSection from "../../components/home/HeroSection.jsx";
import ServicesSection from "../../components/home/ServicesSection.jsx";
import TalentSection from "../../components/home/TalentSection.jsx";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TalentSection />
      <AboutSection />
      <h1>Testimonios</h1>
      <ServicesSection />
    </div>
  );
};

export default HomePage;
