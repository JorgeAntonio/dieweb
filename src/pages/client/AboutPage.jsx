import AboutSection from "../../components/home/AboutSection.jsx";
import ContactSection from "../../components/home/ContactSection.jsx";
import ProblemSection from "../../components/home/ProblemSection.jsx";
import ServicesSection from "../../components/home/ServicesSection.jsx";

export const AboutPage = () => {
  return (
    <div>
      <AboutSection />
      <ServicesSection />

      <ProblemSection />
      <ContactSection />
    </div>
  );
};
