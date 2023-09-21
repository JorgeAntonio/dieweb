import AboutSection from "../../components/home/AboutSection";
import Hero from "../../components/home/HeroSection";
import MisionSection from "../../components/home/MisionSection";
import ProblemSection from "../../components/home/ProblemSection";
import ServicesSection from "../../components/home/ServicesSection";
// import SidebarSection from "../../components/home/SidebarSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <ProblemSection />
          <ServicesSection />
          <AboutSection />
          <MisionSection />
          {/* <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="md:menu p-4 w-80 min-h-full bg-base-200 text-base-content hidden">
              <SidebarSection />
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
