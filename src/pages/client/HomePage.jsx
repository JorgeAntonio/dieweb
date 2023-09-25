import MainHero from "../../components/Services/HeaderSection";
import AboutSection from "../../components/home/AboutSection";
import BlogSection from "../../components/home/BlogSection";
import ContactSection from "../../components/home/ContactSection";
import ServicesSection from "../../components/home/ServicesSection";

const HomePage = () => {
  return (
    <>
      <MainHero />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
