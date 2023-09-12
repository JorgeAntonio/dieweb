import AboutSection from "../../components/home/AboutSection.jsx";
import HeroSection from "../../components/home/HeroSection.jsx";
import MisionSection from "../../components/home/MisionSection.jsx";
import ProblemSection from "../../components/home/ProblemSection.jsx";
import ServicesSection from "../../components/home/ServicesSection.jsx";
import SidebarSection from "../../components/home/SidebarSection.jsx";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <ProblemSection />
          <ServicesSection />
          <AboutSection />
          <MisionSection />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <SidebarSection />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
