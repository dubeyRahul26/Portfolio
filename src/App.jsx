import "./App.css";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMain from "./components/contactMeSection/ContactMain";
import FloatingBlobs from "./components/FloatingBlobs";
import FooterMain from "./components/footer/FooterMain";
import HeroMain from "./components/heroSection/HeroMain.jsx";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-gradient-to-tl from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
      
      {/* Background animated blobs */}
      <FloatingBlobs className="pointer-events-none" />

      {/* Scrollable main content */}
      <main className="relative z-10 overflow-y-auto scroll-smooth">
        <NavbarMain />
        <HeroMain />

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mt-36"></div>
        <AboutMeMain />

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mb-5"></div>
        <SkillsMain />

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <ProjectsMain />

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <ContactMain />

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mb-10"></div>
        <FooterMain />
      </main>
    </div>
  );
}

export default App;
