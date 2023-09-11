import HeroSection from "../../components/home/HeroSection.jsx";
import TalentSection from "../../components/home/TalentSection.jsx";
import AboutSection from "../../components/home/AboutSection.jsx";
import ServicesSection from "../../components/home/ServicesSection.jsx";
import AsideSection from "../../components/home/AsideSection.jsx";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TalentSection />
      <AboutSection />
      <AsideSection />
      <h1>Testimonios</h1>
      <ServicesSection />
    </div>
  );
};

export default HomePage;
